import '../styles/Navbar.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function Navbar() {
    const location = useLocation();

    return (
        <div>
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item montserrat-nav-item mx-2">
                    <Link
                        to="/"
                        className={classNames('nav-link', {
                            active: location.pathname === '/',
                        })}
                    >
                        Inicio
                    </Link>
                </li>
                <li class="nav-item montserrat-nav-item mx-2">
                    <Link
                        to="/MapaConglomerados"
                        className={classNames('nav-link', {
                            active: location.pathname === '/MapaConglomerados',
                        })}
                    >
                        Mapa de conglomerados
                    </Link>
                </li>
                <li class="nav-item montserrat-nav-item mx-2">
                    <a class="nav-link" href="#">
                        Muestras arboreas
                    </a>
                </li>
                <li class="nav-item montserrat-nav-item mx-2">
                    <a class="nav-link" href="#">
                        Muestras de Suelos
                    </a>
                </li>
                <li class="nav-item montserrat-nav-item mx-2">
                    <a class="nav-link" href="#">
                        Colección Bótanica
                    </a>
                </li>
                <li class="nav-item montserrat-nav-item mx-2">
                    <a class="nav-link" href="#">
                        Manual de Consulta
                    </a>
                </li>
            </ul>
        </div>
    );
}
