import React, { useState } from 'react';
import Tabla from '../components/Tabla';
import { useFetch } from '../data/useFetch';
import { CardBody2 } from '../components/Card';
import Suelo from '../Images/water-waves.png';
import { useTodosConglomerados } from '../data/useTodosConglomerados';
import { useSuelos } from '../data/useSuelos';
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
    const { data: totalSuelos, loading: loadingTotal } = useFetch(
        'https://back-end-inventarionacional.onrender.com/api/suelo/obtener-cantidad-suelo'
    );

    const [selectedConglomerado, setSelectedConglomerado] = useState('');
    const { conglomerados, loadingConglomerados } = useTodosConglomerados();

    const [selectedSubparcela, setSelectedSubparcela] = useState('Todas');

    const { suelo, loading } = useSuelos(
        selectedConglomerado,
        selectedSubparcela
    );

    if (loading) {
        return <p className="loading">Cargando datos...</p>;
    }

    return (
        <>
            <div className="card-containers">
                {!loadingTotal && totalSuelos && (
                    <CardBody2
                        title="Muestras de suelos"
                        text={String(totalSuelos.total_suelos)}
                        className="card-link card-dos"
                        img={Suelo}
                    />
                )}
                
                <label className="input-group select-dos">
                    <span>Conglomerados</span>
                    <select
                        value={selectedConglomerado}
                        onChange={(e) =>
                            setSelectedConglomerado(e.target.value)
                        }
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

                <label className="input-group select-dos">
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
                <Tabla columns={columns} data={suelo} />
            </div>
        </>
    );
}

export default App;
