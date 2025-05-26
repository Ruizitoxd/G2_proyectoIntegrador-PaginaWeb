/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Imagen from '../Images/Fondo-login.png';
import ImageProfile from '../Images/Logo-login.png';
import '../styles/Login.css';

/* Importaciones de firebase */
import appFirebase from '../credenciales';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { doc, setDoc, Firestore } from 'firebase/firestore';
import { db } from '../credenciales';
const auth = getAuth(appFirebase);

const Login = () => {
    const navigate = useNavigate();

    const [registrando, setRegistrando] = useState(false);
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const [usuario, setUsuario] = useState(null);

    const nombreColeccion = 'Usuarios'; //Nombre de la colección en firebase database

    const toggleMostrarContraseña = (event) => {
        setMostrarContraseña(event.target.checked);
    };

    const functAutenticacion = async (e) => {
        e.preventDefault();

        //Captura de datos del usuario
        const nombre = registrando ? e.target.nombre?.value : null; // Solo obtener nombre en registro
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando) {
            try {
                //Definición de datos para el registro en el firebase database
                const nuevosDatosUsuarios = {
                    nombre: nombre,
                    rol: 'Ciudadano',
                };

                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    correo,
                    contraseña
                ); //Registrar usuario
                const uid = userCredential.user.uid; //Guardar uid del usuario nuevo

                alert('Cuenta creada exitosamente. Por favor, inicia sesión.');
                setRegistrando(false); // Cambiar a la vista de inicio de sesión

                // Forzar el cierre de sesión inmediatamente después del registro
                await signOut(auth);
                setUsuario(null); // Actualizar el estado del usuario a null

                //Crear un nuevo documento con referencia del UID del usuario
                const userDocRef = doc(db, nombreColeccion, uid);

                //Guardar la información en el firebase database con el UID del usuario relacionado
                await setDoc(userDocRef, nuevosDatosUsuarios);
            } catch (error) {
                alert(error.message);
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
                navigate('/'); // Redirigir a la página de login después del inicio de sesión
            } catch (error) {
                alert('El correo o contraseña son incorrectos');
            }
        }
    };

    const cerrarSesion = async () => {
        try {
            await signOut(auth);
            alert('Sesión cerrada correctamente.');
            navigate('/'); // Redirigir a la página de login
            setUsuario(null);
        } catch (error) {
            alert('Error al cerrar sesión.');
        }
    };

    const handleSalir = () => {
        navigate('/'); // Redirige a la ruta principal (ajusta según tu necesidad)
    };

    // Modificamos onAuthStateChanged para solo establecer el usuario
    onAuthStateChanged(auth, (usuarioFirebase) => {
        setUsuario(usuarioFirebase);
    });

    // Verificamos si hay un usuario logueado al montar el componente
    React.useEffect(() => {
        if (usuario) {
        }
    }, [usuario, navigate]);

    return (
        <div className="contenedor-login">
            <div className="lado-izquierdo">
                <button className="btn-salir-login" onClick={handleSalir}>
                    Salir
                </button>
                <div className="formulario-container">
                    <div className="logo-nombre-container">
                        <img
                            src={ImageProfile}
                            alt="Logo IDEAM"
                            className="estilo-profile"
                        />
                        <div>
                            <h1 className="Text-IDEAM">IDEAM</h1>
                            <p className="text-ideam-abajo">
                                Instituto de Hidrología, Meteorología y Estudios
                                Ambientales
                            </p>
                        </div>
                    </div>
                    <p className="text-bienvenida">
                        Bienvenido al{' '}
                        {registrando ? 'Registro' : 'inicio de sesión'}
                    </p>
                    <form onSubmit={functAutenticacion}>
                        {registrando && (
                            <>
                                <p className="text-correo-contraseña">Nombre</p>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="cajatexto"
                                    id="nombre"
                                />
                            </>
                        )}
                        <p className="text-correo-contraseña">
                            Correo Electrónico
                        </p>
                        <input
                            type="email"
                            placeholder=""
                            className="cajatexto"
                            id="email"
                        />
                        <p className="text-correo-contraseña">Contraseña</p>
                        <input
                            type={mostrarContraseña ? 'text' : 'password'}
                            placeholder=""
                            className="cajatexto"
                            id="password"
                        />
                        <div className="mostrar-contraseña-container">
                            <input
                                type="checkbox"
                                id="mostrarContraseña"
                                checked={mostrarContraseña}
                                onChange={toggleMostrarContraseña}
                            />
                            <label
                                htmlFor="mostrarContraseña"
                                className="text-mostrar-contraseña"
                            >
                                Mostrar Contraseña
                            </label>
                        </div>
                        <button className="btnform">
                            {registrando ? 'Registrate' : 'Entrar'}
                        </button>
                    </form>
                    <h4 className="texto">
                        {registrando
                            ? 'Si ya tienes cuenta'
                            : 'No tienes cuenta'}
                        <button
                            className="btnswitch"
                            onClick={() => setRegistrando(!registrando)}
                        >
                            {registrando ? 'Inicia sesión' : 'Regístrate'}
                        </button>
                    </h4>
                    {usuario && (
                        <button
                            className="btn-cerrar-sesion"
                            onClick={cerrarSesion}
                        >
                            Cerrar Sesión
                        </button>
                    )}
                </div>
            </div>
            <div className="lado-derecho">
                <img src={Imagen} alt="Fondo" className="imagen-fondo" />
            </div>
        </div>
    );
};

export default Login;
