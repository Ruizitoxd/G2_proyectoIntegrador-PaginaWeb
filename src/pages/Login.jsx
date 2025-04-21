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
} from 'firebase/auth';
const auth = getAuth(appFirebase);

const Login = () => {
    const navigate = useNavigate();

    const [registrando, setRegistrando] = useState(false);

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
            } catch (error) {
                alert(error.message);
            }
        } else {
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);
            } catch (error) {
                alert('El correo o contraseña son incorrectos');
            }
        }
    };

    const [usuario, setUsuario] = useState(null);

    onAuthStateChanged(auth, (usuarioFirebase) => {
        if (usuarioFirebase) {
            //Usuario validado
            setUsuario(usuarioFirebase);
            navigate('/');
        } else {
            setUsuario(null);
        }
    });

    return (
        <div className="contenedor-login">
            <div className="lado-izquierdo">
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
                        Bienvenido al inicio de sesión
                    </p>
                    <form onSubmit={functAutenticacion}>
                        <p className="text-correo-contraseña">
                            Correo Electrónico
                        </p>
                        <input
                            type="text"
                            placeholder=""
                            className="cajatexto"
                            id="email"
                        />
                        <p className="text-correo-contraseña">Contraseña</p>
                        <input
                            type="password"
                            placeholder=""
                            className="cajatexto"
                            id="password"
                        />
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
                </div>
            </div>
            <div className="lado-derecho">
                <img src={Imagen} alt="Fondo" className="imagen-fondo" />
            </div>
        </div>
    );
};

export default Login;
