import React from 'react';
import { useFetch } from '../data/useFetch';
import { CardBody2 } from '../components/Card';
import Arbol from '../Images/tree-icon.png';
import Tabla from '../components/Tabla';
import '../styles/Tabla.css';

const columns = [
    { name: 'Id', selector: (row) => row.Id, sortable: true },
    { name: 'Tamaño', selector: (row) => row.Tamaño, sortable: true },
    { name: 'Condicion', selector: (row) => row.Condicion, sortable: true },
    { name: 'Azimut', selector: (row) => row.Azimut, sortable: true },
    { name: 'Distancia', selector: (row) => row.Distancia, sortable: true },
    {
        name: 'Numero fustes',
        selector: (row) => row.Numero_fustes,
        sortable: true,
    },
    { name: 'Diametro', selector: (row) => row.Diametro, sortable: true },
    {
        name: 'Altura fuste',
        selector: (row) => row.Altura_fuste,
        sortable: true,
    },
    { name: 'Forma fuste', selector: (row) => row.Forma_fuste, sortable: true },
    {
        name: 'Diametro fuste',
        selector: (row) => row.Diametro_fuste,
        sortable: true,
    },
    {
        name: 'Altura total',
        selector: (row) => row.Altura_total,
        sortable: true,
    },
    {
        name: 'Diametro copa',
        selector: (row) => row.Diametro_copa,
        sortable: true,
    },
];

function App() {
    const { data, loading } = useFetch(
        'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/arbol/obtener-todos-arboles'
    );

    if (loading || !data || data.length === 0) {
        return <p className="loading">Cargando datos...</p>;
    }

    const datosArboles = data.map((item) => ({
        Id: item.id,
        Tamaño: item.tamano,
        Condicion: item.condicion,
        Azimut: item.azimut,
        Distancia: item.distancia,
        Numero_fustes: item.numero_fustes,
        Diametro: item.diametro,
        Altura_fuste: item.altura_fuste,
        Forma_fuste: item.forma_fuste,
        Diametro_fuste: item.diametro_fuste,
        Altura_total: item.altura_total,
        Diametro_copa: item.diametro_copa,
    }));

    return (
        <>
            <CardBody2
                title="Árbol"
                text="Número de Árboles"
                className="card-uno"
                img={Arbol}
            />
            <div className="App">
                <Tabla columns={columns} data={datosArboles} />
            </div>
        </>
    );
}

export default App;
