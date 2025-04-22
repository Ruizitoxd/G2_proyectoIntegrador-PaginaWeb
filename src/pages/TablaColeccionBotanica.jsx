import React from 'react';
import Tabla from '../components/Tabla';
import { useFetch } from '../data/useFetch';
import { CardBody2 } from '../components/Card';
import Hojas from '../Images/leaf.png';
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
            <div className="card-containers">
                <CardBody2
                    title="Muestras botánicas"
                    text="Número de Colección Botánica"
                    className="card-tres"
                    img={Hojas}
                />

                <label className="input-group select-tres">
                    <span>Conglomerados</span>
                    <select>
                        <option value="">Todos</option>
                    </select>
                </label>

                <label className="input-group select-tres">
                    <span>Sub-Parcela</span>
                    <select>
                        <option value={'Todas'}>Todas</option>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                        <option value={'4'}>4</option>
                        <option value={'5'}>5</option>
                    </select>
                </label>
            </div>

            <div className="App">
                <Tabla columns={columns} data={datosColeccionBotanica} />
            </div>
        </>
    );
}

export default App;
