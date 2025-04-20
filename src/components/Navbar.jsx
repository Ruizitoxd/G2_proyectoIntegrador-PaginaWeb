import '../styles/Navbar.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function Navbar() {
    const location = useLocation();

    return (
        <div>
            <ul className="nav nav-pills nav-justified">
                <li className="nav-item montserrat-nav-item mx-2">
                    <Link
                        to="/"
                        className={classNames('nav-link', {
                            active: location.pathname === '/',
                        })}
                    >
                        Inicio
                    </Link>
                </li>
                <li className="nav-item montserrat-nav-item mx-2">
                    <Link
                        to="/MapaConglomerados"
                        className={classNames('nav-link', {
                            active: location.pathname === '/MapaConglomerados',
                        })}
                    >
                        Mapa de conglomerados
                    </Link>
                </li>
                <li className="nav-item montserrat-nav-item mx-2">
                    <Link
                        to="/TablaArboles"
                        className={classNames('nav-link', {
                            active: location.pathname === '/MapaConglomerados',
                        })}
                    >
                        Muestras arbóreas
                    </Link>
                </li>
                <li className="nav-item montserrat-nav-item mx-2">
                <Link
                        to="/TablaSuelos"
                        className={classNames('nav-link', {
                            active: location.pathname === '/MapaConglomerados',
                        })}
                    >
                        Muestras de Suelos
                    </Link>
                </li>
                <li className="nav-item montserrat-nav-item mx-2">
                <Link
                        to="/TablaColeccionBotanica"
                        className={classNames('nav-link', {
                            active: location.pathname === '/MapaConglomerados',
                        })}
                    >
                        Colección Botánica
                    </Link>
                </li>
                <li className="nav-item montserrat-nav-item mx-2">
                    <a className="nav-link" href="#">
                        Manual de Consulta
                    </a>
                </li>
            </ul>
        </div>
    );
}
