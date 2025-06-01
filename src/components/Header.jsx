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
    const navigate = useNavigate();
    const usuario = useContext(AuthContext);
    const [userName, setUserName] = useState('');
    const [loadingName, setLoadingName] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        if (usuario) {
            const userDocRef = doc(database, 'Usuarios', usuario.uid);
            getDoc(userDocRef)
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setUserName(data.nombre || usuario.email);
                    } else {
                        setUserName(usuario.email);
                    }
                })
                .catch((error) => {
                    console.error(
                        'Error al leer el nombre desde Firestore:',
                        error
                    );
                    setUserName(usuario.email);
                })
                .finally(() => setLoadingName(false));
        }
    }, [usuario]);

    const irAlLogin = () => navigate('/Login');

    const handleLogout = async () => {
        try {
            await signOut(auth);
            sessionStorage.clear();
            navigate('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    const registrarEvento = (mensaje) => {
        const historial = JSON.parse(
            sessionStorage.getItem('historial') || '[]'
        );
        historial.push({
            evento: mensaje,
            timestamp: new Date().toISOString(),
        });
        sessionStorage.setItem('historial', JSON.stringify(historial));
    };

    const handleNavigate = (ruta, evento) => {
        if (evento) registrarEvento(evento);
        navigate(ruta);
        setIsDropdownOpen(false);
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
                        <div className="user-dropdown">
                            <button
                                className="user-dropdown-btn"
                                type="button"
                                data-bs-toglle="dropdown"
                                onClick={toggleDropdown}
                                aria-expanded="false"
                            >
                                {loadingName ? 'Cargando...' : userName}
                            </button>

                            {isDropdownOpen && (
                                <div className="user-dropdown-menu">
                                    <button
                                        className="dropdown-item"
                                        onClick={() =>
                                            handleNavigate(
                                                '/Excel/home',
                                                'Entró a Cargar Datos'
                                            )
                                        }
                                    >
                                        Cargar Datos
                                    </button>
                                    <button
                                        className="dropdown-item"
                                        onClick={() =>
                                            handleNavigate(
                                                '/Reporte/home',
                                                'Entró a Informes'
                                            )
                                        }
                                    >
                                        Informes
                                    </button>
                                    <button
                                        className="dropdown-item"
                                        onClick={() =>
                                            handleNavigate(
                                                '/historial',
                                                'Entró al Historial'
                                            )
                                        }
                                    >
                                        Historial
                                    </button>

                                    <hr />
                                    <button
                                        className="dropdown-item logout-btn"
                                        onClick={handleLogout}
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
