// src/components/Mapa.js
import { MapContainer, TileLayer, Circle, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { useConglomerados } from '../data/useConglomerados.js'; // Importa el hook
import '../styles/Mapa.css';

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

    // Usar el hook customizado para obtener los conglomerados
    const conglomerados = useConglomerados();

    return (
        <div className="map-container">
            <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
            >
                <FontAwesomeIcon icon={faSliders} size="2x" />
            </button>

            <MapContainer
                center={[7.111, -73.05]}
                zoom={16}
                style={{ height: '80vh', width: '100%' }}
                zoomControl={false}
            >
                <TileLayer
                    url={tileStyles[selectedStyle].url}
                    attribution={tileStyles[selectedStyle].attribution}
                />
                <ZoomControl position="bottomright" />

                {conglomerados.map((item) => (
                    <Circle
                        key={item.id}
                        center={[item.latitud, item.longitud]}
                        radius={160}
                        pathOptions={{
                            color: "red",
                            fillOpacity: 0.4,
                            fillColor: "red",
                        }}
                    >
                        <Popup>{item.region}</Popup>
                    </Circle>
                ))}
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
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                        Filtrar conglomerados
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
                    <div className="map-filter-section"></div>

                    {/* Lista de conglomerados activos en el mapa*/}
                    <div className="map-conglomerados-section"></div>

                    {/* Selecto de cambio de estilo del mapa */}
                    <div className="map-select-section">
                        <div className="map-style-selector">
                            <div
                                className="style-option"
                                onClick={() => setSelectedStyle('OpenStreetMap')}
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
