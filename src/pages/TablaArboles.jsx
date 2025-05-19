import React, { useState } from 'react';
import { useArboles } from '../data/useArbolesYConglomerados';
import { useTodosConglomerados } from '../data/useTodosConglomerados';
import { useFetch } from '../data/useFetch';
import { CardBody2 } from '../components/Card';
import Arbol from '../Images/tree-icon.png';
import Tabla from '../components/tabla';
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
    const { data: totalArboles, loading: loadingTotal } = useFetch(
        'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/arbol/obtener-cantidad-arboles'
    );

    const [selectedConglomerado, setSelectedConglomerado] = useState('');
    const [selectedSubparcela, setSelectedSubparcela] = useState('Todas');

    const { conglomerados, loadingConglomerados } = useTodosConglomerados();

    const { arboles, loading } = useArboles(
        selectedConglomerado,
        selectedSubparcela
    );

    if (loading) {
        return <p className="loading">Cargando datos...</p>;
    }

    return (
        <>
            <div className="card-containers">
                {!loadingTotal && totalArboles.length > 0 && (
                    <CardBody2
                        title="Muestras de árboles"
                        text={String(totalArboles[0].total_arboles)}
                        className="card-link card-uno"
                        img={Arbol}
                    />
                )}

                <label className="input-group select-uno">
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

                <label className="input-group select-uno">
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
                <Tabla columns={columns} data={arboles} />
            </div>
        </>
    );
}

export default App;
