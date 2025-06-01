import {
    MapContainer,
    TileLayer,
    Circle,
    Popup,
    ZoomControl,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { useConglomerados } from '../data/useConglomerados.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import '../styles/Mapa.css';
import SliderFilter from './SliderFilter';
import ChangeView from './ChangeView.jsx';

export default function Mapa() {
    const tileStyles = {
        OpenStreetMap: {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        },
        'Carto Light': {
            url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
            attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        },
        'Carto Dark': {
            url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
            attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        },
    };

    const [selectedStyle, setSelectedStyle] = useState('OpenStreetMap');
    // Agrega esto arriba
    const [region, setRegion] = useState('');
    const [posEstrato, setPosEstrato] = useState('');

    const conglomerados = useConglomerados(region, posEstrato);

    const colorRandom = () => {
        const colores = [
            'red',
            'orange',
            'yellow',
            'green',
            'blue',
            'purple',
            'cyan',
            'magenta',
            'pink',
            'lime',
            'fuchsia',
            'aqua',
            'indigo',
            'violet',
            'turquoise',
            'coral',
            'teal',
            'chartreuse',
            'salmon',
            'tomato',
            'gold',
            'crimson',
            'orchid',
            'plum',
            'dodgerblue',
        ];

        return colores[Math.floor(Math.random() * colores.length)];
    };
    return (
        <div className="map-container">
            {/* Botón que abre el offcanvas de filtros */}
            <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
            >
                <FontAwesomeIcon icon={faSliders} size="2x" />
            </button>

            {/* Sección del mapa principal */}
            <MapContainer
                center={[7.111, -73.05]}
                zoom={16}
                style={{ height: '80vh', width: '100%' }}
                zoomControl={false}
            >
                <ChangeView
                    center={
                        conglomerados?.[0]
                            ? [
                                  conglomerados[0].latitud,
                                  conglomerados[0].longitud,
                              ]
                            : [7.111, -73.05]
                    }
                    zoom={16}
                />
                {/* Establece el estilo del mapa */}
                <TileLayer
                    url={tileStyles[selectedStyle].url}
                    attribution={tileStyles[selectedStyle].attribution}
                />

                {/* Establece la ubicación de los controles de zoom */}
                <ZoomControl position="bottomright" />

                {/* Ciclo que coloca los circulos del mapa según la información de los conglomerados */}
                {conglomerados.map((item) => {
                    const color = colorRandom(); // Generar el color una vez
                    return (
                        <Circle
                            key={item.id}
                            center={[item.latitud, item.longitud]}
                            radius={160}
                            pathOptions={{
                                color: color,
                                fillOpacity: 0.4,
                                fillColor: color,
                            }}
                        >
                            <Popup>
                                <div>
                                    <p>
                                        <strong>Id:</strong> {item.id}
                                    </p>
                                    <p>
                                        <strong>Región:</strong> {item.region}
                                    </p>
                                    <p>
                                        <strong>Latitud:</strong> {item.latitud}
                                    </p>
                                    <p>
                                        <strong>Longitud:</strong>{' '}
                                        {item.longitud}
                                    </p>
                                    <p>
                                        <strong>Estrato:</strong>{' '}
                                        {item.posEstrato}
                                    </p>
                                </div>
                            </Popup>
                        </Circle>
                    );
                })}
            </MapContainer>

            {/* Sección del offcanvas de filtros */}
            <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex="-1"
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
            >
                <div className="offcanvas-header">
                    <h5
                        className="offcanvas-title"
                        id="offcanvasScrollingLabel"
                    >
                        Filtrar por:
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    {/* Sección de filtros usables */}
                    <div className="map-filter-section">
                        {/* Filtro de región */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <label
                                htmlFor="selectRegion"
                                className="form-label fw-bold mb-0 me-2"
                                style={{ minWidth: '100px' }}
                            >
                                Región:
                            </label>
                            <select
                                id="selectRegion"
                                className="form-select shadow-sm"
                                style={{ maxWidth: '250px' }}
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                            >
                                <option value="">Seleccionar región</option>
                                <option value="Amazonía">Amazonía</option>
                                <option value="Caribe">Caribe</option>
                                <option value="Andes">Andes</option>
                                <option value="Pacífico">Pacífico</option>
                        
                                <option value="Orinoquía">Orinoquía</option>
                            
                            </select>
                        </div>

                        {/* Filtro de postestrato */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <label
                                htmlFor="selectRegion"
                                className="form-label fw-bold mb-0 me-2"
                                style={{ minWidth: '100px' }}
                            >
                                Post Estrato:
                            </label>
                            <select
                                id="selectPosEstrato"
                                className="form-select shadow-sm"
                                style={{ maxWidth: '250px' }}
                                value={posEstrato}
                                onChange={(e) => setPosEstrato(e.target.value)}
                            >
                                <option value="">
                                    Seleccionar post-estrato
                                </option>
                                <option value="Bosque">Bosque</option>
                                <option value="No Bosque">No Bosque</option>
                            </select>
                        </div>

                        {/* Filtro de número de conglomerados */}
                        <SliderFilter />
                    </div>

                    {/* Lista de conglomerados activos en el mapa*/}
                    <div className="map-conglomerados-section"></div>

                    {/* Selecto de cambio de estilo del mapa */}
                    <div className="map-select-section">
                        <div className="map-style-selector">
                            <div
                                className="style-option"
                                onClick={() =>
                                    setSelectedStyle('OpenStreetMap')
                                }
                            >
                                <img
                                    src={require('../Images/map_style_default.png')}
                                    alt="Default map style"
                                />
                            </div>
                            <div
                                className="style-option"
                                onClick={() => setSelectedStyle('Carto Light')}
                            >
                                <img
                                    src={require('../Images/map_style_light.png')}
                                    alt="Light map style"
                                />
                            </div>
                            <div
                                className="style-option"
                                onClick={() => setSelectedStyle('Carto Dark')}
                            >
                                <img
                                    src={require('../Images/map_style_dark.png')}
                                    alt="Dark map style"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
