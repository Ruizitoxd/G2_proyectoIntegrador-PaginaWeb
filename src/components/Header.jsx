import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function header() {
    return (
        <header class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand montserrat-title-font" href="#">
                    <img
                        src={require('./Images/Logo_Ideam.png')}
                        alt="Logo_Ideam"
                    />
                    Instituto de Hidrología, Meteorología y Estudios Ambientales
                </a>
                <FontAwesomeIcon icon="fa-regular fa-circle-user" />
            </div>
        </header>
    );
}
