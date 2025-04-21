import React from 'react';
import Tabla from '../components/Tabla';
import { useFetch } from '../data/useFetch';
import { CardBody2 } from '../components/Card';
import Arbol from '../Images/water-waves.png';
import '../styles/Tabla.css';

const columns = [
    { name: 'Id', selector: (row) => row.Id, sortable: true },
    { name: 'Carbono', selector: (row) => row.Carbono, sortable: true },
    { name: 'Color', selector: (row) => row.Color, sortable: true },
    { name: 'Fertilidad', selector: (row) => row.Fertilidad, sortable: true },
    {
        name: 'Observaciones',
        selector: (row) => row.Observaciones,
        sortable: true,
    },
];

function App() {
    const { data, loading } = useFetch(
        'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/suelo/obtener-todos-suelo'
    );

    if (loading || !data || data.length === 0) {
        return <p className="loading">Cargando datos...</p>;
    }

    const datosSuelos = data.map((item) => ({
        Id: item.id,
        Carbono: item.carbono,
        Color: item.color,
        Fertilidad: item.fertilidad,
        Observaciones: item.observaciones,
    }));

    return (
        <>
            <CardBody2
                title="Suelos"
                text="Número de Suelos"
                className="card-dos"
                img={Arbol}
            />

            <div className="App">
                <Tabla columns={columns} data={datosSuelos} />
            </div>
        </>
    );
}

export default App;
