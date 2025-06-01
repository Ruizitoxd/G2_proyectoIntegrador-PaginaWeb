import { useEffect } from 'react';
import Carrusel from '../components/Carrusel';

const Inicio = () => {
    useEffect(() => {
        const historial = JSON.parse(sessionStorage.getItem('historial') || '[]');
        const evento = 'Entró a Inicio';
        const timestamp = new Date().toISOString();

        if (historial.length === 0 || historial[historial.length - 1].evento !== evento) {
            historial.push({ evento, timestamp });
            sessionStorage.setItem('historial', JSON.stringify(historial));
        }
    }, []);

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <Carrusel />
        </div>
    );
};

export default Inicio;
