import React, { useState, useEffect, useContext, useRef } from 'react';
import Manual from '../components/Manual';
import VisorPDF from '../components/Visorpdf';
import '../styles/Manual.css';
import '../styles/Visorpdf.css';
import '../styles/ManualDeConsulta.css';
import { AuthContext } from '../AuthContext';

const ManualDeConsulta = () => {
    const [pdfSeleccionado, setPdfSeleccionado] = useState('');
    const [activo, setActivo] = useState(null);
    const usuario = useContext(AuthContext);
    const yaRegistrado = useRef(false); // <- Nuevo

    useEffect(() => {
        if (usuario && !yaRegistrado.current) {
            const historial = JSON.parse(
                sessionStorage.getItem('historial') || '[]'
            );
            historial.push({
                evento: 'Entró al Manual de Consulta',
                timestamp: new Date().toISOString(),
            });
            sessionStorage.setItem('historial', JSON.stringify(historial));
            yaRegistrado.current = true; // <- Evita que se repita
        }
    }, [usuario]);

    const manejarSeleccion = (pdfUrl, id) => {
        setPdfSeleccionado('');
        setTimeout(() => setPdfSeleccionado(pdfUrl), 10);
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
