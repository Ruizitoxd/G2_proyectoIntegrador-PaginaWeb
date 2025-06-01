import '../styles/Historial.css';
import { useEffect, useState } from 'react';

const Historial = () => {
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        const datos = JSON.parse(sessionStorage.getItem('historial') || '[]');
        setHistorial(datos);
    }, []);

    const esEntradaSeccion = (evento) => evento.startsWith('Entró a');

    return (
        <div className="historial-container">
            <h2>Historial</h2>
            <ul>
                {historial.map((item, index) => {
                    const eventoActual = item.evento;
                    const eventoPrevio =
                        index > 0 ? historial[index - 1].evento : null;
                    const mostrarSeparador =
                        esEntradaSeccion(eventoActual) &&
                        eventoActual !== eventoPrevio;

                    return (
                        <li key={index} className="historial-item">
                            {mostrarSeparador && <div className="separador" />}
                            <span>{eventoActual}</span> –{' '}
                            <small>
                                {new Date(item.timestamp).toLocaleString()}
                            </small>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Historial;
