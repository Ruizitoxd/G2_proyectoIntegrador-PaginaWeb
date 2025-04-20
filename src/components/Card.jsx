import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobe, faTag, faMap } from '@fortawesome/free-solid-svg-icons'; // Mover esta importación al principio
import React from 'react'; 

import '../styles/MenuConglomerado.css';

export default function Card(props) {
    const { children } = props;
    return (
        <div
            className="card"
            style={{
                width: '350px',
            }}
        >
            <div className="card-body">{children}</div>
        </div>
    );
}

/**
 * @param {{ title: string, text?: string, subtitle?: string, className?: string, img: string }} props
 */
export function CardBody2(props) {
    const { title, subtitle, text, className, img } = props;
    return (
        <a href="#seccion-destino" className={`card-link ${className || ''}`}>
            <img src={img} alt="Icono" />
            <div className="card-content">
                <h5 className="card-title">{title}</h5>
                {subtitle && <h6 className="card-subtitle">{subtitle}</h6>}
                <p className="card-text">{text}</p>
            </div>
        </a>
    );
    
}

/**
 * @param {{ Id: string, Latitud?: string, Longitud?: string, className?: string, Region: string, PostEstrato: string }} props1
 */


export function CardBody3(props1) {
    const { Id, Latitud, Longitud, className, Region, PostEstrato } = props1;

    return (
        <div className={`card-enla ${className || ''}`}>
            <div className="card-header">Conglomerado</div>
            <div className="card-body">
            <p className="card-text"><FontAwesomeIcon icon={faTag} /> Id: {Id}</p>
                <p className="card-text"><FontAwesomeIcon icon={faMapMarkerAlt} /> Latitud: {Latitud}</p>
                <p className="card-text"><FontAwesomeIcon icon={faGlobe} /> Longitud: {Longitud}</p>
                <p className="card-text"><FontAwesomeIcon icon={faMap} /> Región: {Region}</p>
                <p className="card-text"><FontAwesomeIcon icon={faTag} /> PostEstrato: {PostEstrato}</p>
            </div>
        </div>
    );
}
