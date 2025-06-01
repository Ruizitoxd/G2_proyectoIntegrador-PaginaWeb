import { useState } from 'react';

export default function GenerarReportEspecifico() {
    const [tipoSeleccionado, setTipoSeleccionado] = useState('');

    const generarReporte = () => {
        // Reemplaza las siguientes URLs con tus APIs correspondientes:
        let url = '';

        switch (tipoSeleccionado) {
            case 'arboles':
                url = 'http://localhost:4000/api/reporteGeneral/pdf/arboles';
                break;
            case 'suelos':
                url = 'http://localhost:4000/api/reporteGeneral/pdf/suelo';
                break;
            case 'especies':
                url = 'http://localhost:4000/api/reporteGeneral/pdf/especie';
                break;
            default:
                alert('Selecciona un tipo válido');
                return;
        }

        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error('Error al generar el PDF');
                return res.blob();
            })
            .then((blob) => {
                const urlBlob = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = urlBlob;
                a.download = `reporte_${tipoSeleccionado}.pdf`;
                a.click();
                window.URL.revokeObjectURL(urlBlob);
            })
            .catch((err) => {
                console.error('Fallo la petición:', err);
                alert('Error al generar el PDF');
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Selecciona el tipo de dato:</h2>

            <select
                className="form-select mb-3"
                value={tipoSeleccionado}
                onChange={(e) => setTipoSeleccionado(e.target.value)}
            >
                <option value="">-- Seleccionar --</option>
                <option value="arboles">Árboles</option>
                <option value="suelos">Suelos</option>
                <option value="especies">Especies</option>
            </select>

            <button
                className="btn btn-primary"
                onClick={generarReporte}
                disabled={!tipoSeleccionado}
            >
                Generar Reporte
            </button>
        </div>
    );
}
