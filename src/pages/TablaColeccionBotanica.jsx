import React, { useState } from 'react';
import Tabla from '../components/Tabla';
import { useFetch } from '../data/useFetch';
import { CardBody2 } from '../components/Card';
import Hojas from '../Images/leaf.png';
import { useTodosConglomerados } from '../data/useTodosConglomerados'
import {useColeccion} from '../data/useColeccion'
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

        const { data: totalColeccion, loading: loadingTotal } = useFetch(
            'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/ColeccionBotanica/obtener-cantidad-ColeccionBotanico'
        );
    
    const [selectedConglomerado, setSelectedConglomerado] = useState('');
    const [selectedSubparcela, setSelectedSubparcela] = useState('Todas');
    const { conglomerados, loadingConglomerados } = useTodosConglomerados();

    const { Coleccion, loading } = useColeccion(
        selectedConglomerado,
        selectedSubparcela
    );

    if (loading) {
        return <p className="loading">Cargando datos...</p>;
    }

 

    return (
        <>
            <div className="card-containers">
                {!loadingTotal && totalColeccion &&(
                <CardBody2
                    title="Muestras botánicas. "
                    text={String(totalColeccion.total_coleccion)}
                    className="card-tres"
                    img={Hojas}
                />
)}
            <label className="input-group select-tres">
                    <span>Conglomerados</span>
                    <select
                        value={selectedConglomerado}
                        onChange={(e) => setSelectedConglomerado(e.target.value)}
                    >
                        <option value="">Todos</option>
                        {!loadingConglomerados &&
                            conglomerados?.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.id}
                                </option>
                            ))}
                    </select>
                </label>

                <label className="input-group select-tres">
                    <span>Sub-Parcela</span>
                    <select
                        value={selectedSubparcela}
                        onChange={(e) => setSelectedSubparcela(e.target.value)}
                    >
                        <option value="Todas">Todas</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
            </div>

            <div className="App">
                <Tabla columns={columns} data={Coleccion} />
            </div>
        </>
    );
}

export default App;
