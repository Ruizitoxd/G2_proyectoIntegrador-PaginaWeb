import UploadExcel from '../components/subirExcel';
import { useState } from 'react';
import Tabla from '../components/Tabla';

function CargarSuelo() {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const encabezadosEsperados = [
        'color',
        'carbono',
        'fertilidad',
        'idsubparcela',
    ];

    const handleData = (jsonData) => {
        setData(jsonData);
        setMensaje('');

        // Generar columnas dinámicamente desde los encabezados del archivo
        if (jsonData.length > 0) {
            const columnasGeneradas = Object.keys(jsonData[0]).map((key) => ({
                name: key,
                selector: (row) => row[key],
                sortable: true,
            }));
            setColumns(columnasGeneradas);
        }
    };

    const enviarDatos = async () => {
        setEnviando(true);
        setMensaje('');

        try {
            const response = await fetch(
                'https://back-end-inventarionacional.onrender.com/api/suelo/agregar-suelo',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                setMensaje('🌳 Datos enviados correctamente.');
                setData([]);
                setColumns([]);
            } else {
                const errorData = await response.json();
                setMensaje(
                    `❌ Error al enviar: ${
                        errorData.message || response.statusText
                    }`
                );
            }
        } catch (error) {
            setMensaje('❌ Error de red al enviar los datos.');
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Subir datos de los suelos</h2>
            <UploadExcel
                buttonClass="boton-suelo"
                expectedHeaders={encabezadosEsperados}
                onData={handleData}
            />

            {data.length > 0 && columns.length > 0 && (
                <>
                    <Tabla columns={columns} data={data} />
                    <button
                        onClick={enviarDatos}
                        className="boton-suelo"
                        disabled={enviando}
                        style={{ marginTop: '20px' }}
                    >
                        {enviando ? 'Enviando...' : 'Enviar Datos al Servidor'}
                    </button>
                </>
            )}

            {mensaje && (
                <p
                    style={{
                        marginTop: '10px',
                        color: mensaje.startsWith('❌') ? 'red' : 'green',
                    }}
                >
                    {mensaje}
                </p>
            )}
        </div>
    );
}

export default CargarSuelo;
