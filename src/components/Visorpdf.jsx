import React from 'react';
import '../styles/Visorpdf.css';

const VisorPDF = ({ pdfUrl }) => {
    return (
        <div className="visorpdf-container">
            {pdfUrl ? (
                <iframe
                    src={pdfUrl}
                    title="Visor PDF"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                />
            ) : (
                <div className="mensaje-pdf-vacio">
                    <p>Selecciona una sección para ver el PDF</p>
                </div>
            )}
        </div>
    );
};

export default VisorPDF;
