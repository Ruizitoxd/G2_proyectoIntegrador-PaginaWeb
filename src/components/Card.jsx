import React from 'react';

import '../styles/Card.css';

export default function Card(props) {
    const { children } = props;
    return (
        <div className="card">
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
        <div className={`card-link ${className || ''}`}>
            <img src={img} alt="Icono" />
            <div className="card-content">
                <p className="card-text">{text}</p>
                <h5 className="card-title">{title}</h5>
                {subtitle && <h6 className="card-subtitle">{subtitle}</h6>}
            </div>
        </div>
    );
}
