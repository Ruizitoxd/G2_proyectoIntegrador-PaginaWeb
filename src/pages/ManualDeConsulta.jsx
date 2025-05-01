import React, { useState } from 'react';
import Manual from '../components/Manual';
import VisorPDF from '../components/Visorpdf';
import '../styles/Manual.css';
import '../styles/Visorpdf.css';
import '../styles/ManualDeConsulta.css';

const ManualDeConsulta = () => {
    const [pdfSeleccionado, setPdfSeleccionado] = useState('');
    const [activo, setActivo] = useState(null); // ID de sección activa

    const manejarSeleccion = (pdfUrl, id) => {
        // Forzar recarga incluso si el mismo PDF es clickeado de nuevo
        setPdfSeleccionado('');
        setTimeout(() => {
            setPdfSeleccionado(pdfUrl);
        }, 10);
        setActivo(id);
    };

    return (
        <div className="manual-layout">
            <div className="manual-panel">
                <Manual onSeleccionarPDF={manejarSeleccion} activo={activo} />
            </div>
            <div className="visor-panel">
                <VisorPDF pdfUrl={pdfSeleccionado} />
            </div>
        </div>
    );
};

export default ManualDeConsulta;
