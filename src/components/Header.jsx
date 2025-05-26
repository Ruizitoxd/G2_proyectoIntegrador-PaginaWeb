import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from '../AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import appFirebase from '../credenciales';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import '../styles/Header.css';

const auth = getAuth(appFirebase);
const database = getFirestore();

export default function Header() {
    const navigate = useNavigate(); //Control de navegación para redirigir al login
    const usuario = useContext(AuthContext); //AuthContexto que trae el usuario si ya está loggeado
    const [userName, setUserName] = useState(''); //Estado para asegurar de cargar el usuario cuando se reciba a través del authcontext
    const [loadingName, setLoadingName] = useState(true); //Estado de carga para antes de cargar el usuario

    //Función que se ejecuta cuando el componente se monta
    useEffect(() => {
        if (usuario) {
            const userDocRef = doc(database, 'Usuarios', usuario.uid); //Ruta al usuario loggeado de firestore

            getDoc(userDocRef)
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        const data = docSnap.data(); //Obtener los datos de la base de datos de firestore
                        setUserName(data.nombre || usuario.email); // Obtener nombre y correo como fallback
                    } else {
                        setUserName(usuario.email); // Fallback si no existe documento
                    }
                })
                .catch((error) => {
                    console.error(
                        'Error al leer el nombre desde Firestore:',
                        error
                    );
                    setUserName(usuario.email); // Fallback en caso de error
                })
                .finally(() => {
                    setLoadingName(false); // Ya terminó de cargar
                });
        }
    }, [usuario]);

    const irAlLogin = () => {
        navigate('/Login');
    };

    //Función para cerrar sesión
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <header className="navbar">
            <div className="container-fluid">
                <div className="navbar-brand montserrat-title-font">
                    <img
                        src={require('../Images/Logo_Ideam.png')}
                        alt="Logo_Ideam"
                    />
                    Instituto de Hidrología, Meteorología y Estudios Ambientales
                </div>

                <div className="navbar-user-container">
                    <FontAwesomeIcon icon={faCircleUser} size="3x" />

                    {!usuario ? (
                        <button className="login-button" onClick={irAlLogin}>
                            Iniciar sesión
                        </button>
                    ) : (
                        <div className="dropdown">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {loadingName ? 'Cargando...' : userName}
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <button
                                        className="dropdown-item"
                                        onClick={handleLogout}
                                    >
                                        Cerrar Sesión
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
