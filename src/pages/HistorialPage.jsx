import React from 'react';
import Historial from '../components/Historial';
import '../styles/Historial.css'; // Asegúrate de que esta ruta sea correcta

const HistorialPage = () => {
    return (
        <div className="historial-container">
            <h2 className="historial-title">Historial de Actividades</h2>
            <Historial />
        </div>
    );
};

export default HistorialPage;
