import React from 'react';
import Table from '../components/tabla'; // Suponiendo que tienes el archivo Table.js
import { useFetch } from '../data/useFetch';
import { CardBody2} from '../components/Card';
import Arbol from '../Images/leaf.png';
import '../styles/Tabla.css';


const columns = [
    { name: 'Id', selector: (row) => row.Id, sortable: true },
    { name: 'Tamaño', selector: (row) => row.Tamaño, sortable: true },
    {
        name: 'Nombre Comun',
        selector: (row) => row.Nombre_Comun,
        sortable: true,
    },
    {
        name: 'Nombre Cientifico',
        selector: (row) => row.Nombre_Cientifico,
        sortable: true,
    },
    {
        name: 'Observaciones',
        selector: (row) => row.Observaciones,
        sortable: true,
    },
    { name: 'Foto', selector: (row) => row.Foto, sortable: true },
];



function App() {
    const { data, loading } = useFetch(
        'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/ColeccionBotanica/obtener-todos-ColeccionBotanico'
    );
    if (loading || !data || data.length === 0) {
        return <p className="loading">Cargando datos...</p>;
    }

    const datosColeccionBotanica = data.map((item) => ({
        Id: item.id,
        Tamaño: item.tamano,
        Nombre_Comun: item.nombre_comun,
        Nombre_Cientifico: item.nombre_cientifico,
        Observaciones: item.observaciones_individuo,
        Foto: item.foto,
    }));
    return (

        <>
        <CardBody2
          title="Botánica"
          text="Número de Colección Botánica"
          className="card-tres"
          img={Arbol}
        />

        <div className="App">
            <Table columns={columns} data={datosColeccionBotanica} />
        </div>
        </>
    );
}

export default App;
