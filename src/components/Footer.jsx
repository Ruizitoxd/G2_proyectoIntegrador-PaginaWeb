// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faFacebookF,
    faYoutube,
    faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-column info-column">
                    <h3>Información</h3>
                    <p>
                        Calle 25 D No. 98 B – 70
                        <br />
                        Bogotá D.C.
                        <br />
                        Código Postal: 110911
                    </p>
                    <p>
                        Horario de atención:
                        <br />
                        Lunes a Viernes 8:00 am - 5:00 pm
                    </p>
                </div>

                <div className="footer-column support-column">
                    <h3>Soporte</h3>
                    <p>
                        Notificaciones judiciales al IDEAM:{' '}
                        <a href="mailto:notificacionesjudiciales@ideam.gov.co">
                            notificacionesjudiciales@ideam.gov.co
                        </a>
                    </p>
                    <p>
                        Radicación de comunicaciones oficiales:{' '}
                        <a href="mailto:contacto@ideam.gov.co">
                            contacto@ideam.gov.co
                        </a>
                    </p>
                    <p>
                        Línea anticorrupción:{' '}
                        <a href="mailto:denunciacorrupcion@ideam.gov.co">
                            denunciacorrupcion@ideam.gov.co
                        </a>
                    </p>
                    <p>
                        PBX: +57 (601) 352 7160
                        <br />
                        Pronóstico y Alertas: +57 (601) 307 5825
                    </p>
                    <div className="footer-links">
                        <a
                            href="https://www.ideam.gov.co/transparencia"
                            target="blank"
                        >
                            Términos y condiciones
                        </a>
                        <a
                            href="https://www.ideam.gov.co/transparencia/normativa/normativa-de-la-entidad-o-autoridad/politicas-lineamientos-y-manuales"
                            target="blank"
                        >
                            Políticas
                        </a>
                    </div>
                </div>

                <div className="social-column">
                    <h3 className="Linea-Siguenos">Síguenos</h3>
                    <div className="social-icons">
                        <a
                            href="https://www.instagram.com/ideamcolombia/"
                            target="blank"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://www.facebook.com/ideam.instituto"
                            target="blank"
                        >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a
                            href="https://www.youtube.com/user/InstitutoIDEAM"
                            target="blank"
                        >
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://x.com/IDEAMColombia" target="blank">
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                    </div>
                </div>

                <div className="footer-column map-column">
                    <iframe
                        title="Ubicación IDEAM"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63627.30943477541!2d-74.14191633806432!3d4.646286054580865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c9c2a0daa57%3A0x5d3be46e7ebc1a52!2sIDEAM%20-Instituto%20de%20Hidrolog%C3%ADa%2C%20Meteorolog%C3%ADa%20y%20Estudios%20Ambientales!5e0!3m2!1ses-419!2sco!4v1745008945210!5m2!1ses-419!2sco"
                        width="100%"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <div className="footer-credit">
                © 2025 IDEAM - Todos los derechos reservados – Inspirado en el
                IDEAM – Desarrollado por – Santiago Cote – Juan Ruiz – Jose
                Zerpa
            </div>
        </footer>
    );
};

export default Footer;
