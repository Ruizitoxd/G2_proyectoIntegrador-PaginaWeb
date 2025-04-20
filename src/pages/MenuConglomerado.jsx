import { useFetch } from '../data/useFetch';
import { CardBody2, CardBody3 } from '../components/Card';

import Arbol from '../Images/tree-icon.png';
import Suelo from '../Images/water-waves.png';
import Muestras from '../Images/leaf.png'; // corregido el nombre
import '../styles/MenuConglomerado.css';

function App() {
    const { data, loading } = useFetch(
        'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/conglomerado/obtener-conglomerado/1'
    );

    if (loading || !data || data.length === 0) {
        return <p className="loading">Cargando datos...</p>;
    }
    

    console.log('Data del fetch:', data);

    return (
        <div>
            {/* Tarjetas horizontales */}
            <div className="card-container">
                <CardBody2
                    title="Árbol"
                    text="Número de Árboles"
                    className="card-arbol"
                    img={Arbol}
                />
                <CardBody2
                    title="Suelo"
                    text="Número de Suelo"
                    className="card-suelo"
                    img={Suelo}
                />
                <CardBody2
                    title="Muestras"
                    text="Número de Muestras"
                    className="card-muestras"
                    img={Muestras}
                />
            </div>

            {/* Tarjeta inferior */}
            <div className="card-row card-row-full">
                <CardBody3
                    Id={data[0].id}
                    PostEstrato={data[0].postEstrato}
                    Region={data[0].region}
                    Latitud={data[0].latitud}
                    Longitud={data[0].longitud}
                    className="card-info"
                />
            </div>
        </div>
    );
}

export default App;
