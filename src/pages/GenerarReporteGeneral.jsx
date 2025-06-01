import { useEffect, useState } from 'react';

export default function GenerarReporteGeneral() {
    const [conglomerados, setConglomerados] = useState([]);
    const [seleccionados, setSeleccionados] = useState([]);

    //Obtener los conglomerados del back-end
    useEffect(() => {
        fetch(
            'https://back-end-inventarionacional.onrender.com/api/conglomerado/obtener-id-conglomerado'
        )
            .then((res) => res.json())
            .then((data) => setConglomerados(data))
            .catch((err) =>
                console.error('Error al obtener los conglomerados:', err)
            );
    }, []);

    const toggleSeleccion = (id) => {
        setSeleccionados((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const generarReporte = () => {
        fetch('http://localhost:4000/api/reporteGeneral/pdf/conglomerados', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ids: seleccionados }),
        })
            .then((res) => {
                if (!res.ok)
                    throw new Error('Error al generar PDF version RES');
                return res.blob();
            })
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'reporte_conglomerados.pdf';
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch((err) => {
                console.error('Fallo la petición:', err);
                alert('Error al generar el PDF version err');
            });
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Selecciona los conglomerados:</h2>
            <div className="mb-3">
                {conglomerados.map((cong) => (
                    <div className="form-check" key={cong.id}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={cong.id}
                            id={`check-${cong.id}`}
                            checked={seleccionados.includes(cong.id)}
                            onChange={() => toggleSeleccion(cong.id)}
                        />
                        <label
                            className="form-check-label"
                            htmlFor={`check-${cong.id}`}
                        >
                            {cong.id}
                        </label>
                    </div>
                ))}
            </div>
            <button
                className="btn btn-primary"
                onClick={generarReporte}
                disabled={seleccionados.length === 0}
            >
                Generar Reporte
            </button>
        </div>
    );
}
