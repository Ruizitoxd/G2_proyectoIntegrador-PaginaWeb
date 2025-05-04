import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import '../styles/Manual.css';

// Sección 0 - Introducción
const seccionesIntroduccion = [
    {
        id: 'Introduccion1',
        titulo: 'Definición de la estrategia de recolección de datos',
        descripcion:
            'La secuencia de actividades del trabajo de campo está en función de las secciones que conforman el Manual de Campo del IFN (Figura 1).',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=16',
    },
    {
        id: 'Introduccion2',
        titulo: 'Descripción general de los conglomerados',
        descripcion:
            'Cada unidad de muestreo consiste en un conglomerado de 3.535 m2...',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=18',
    },
    {
        id: 'Introduccion3',
        titulo: 'Consideraciones especiales',
        descripcion:
            'Se hace necesario seguir las siguientes recomendaciones generales...',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=20',
    },
];

// Sección 1 - Conglomerados
const seccionesConglomerados = [
    {
        id: 'Conglomerado1',
        titulo: 'Conformación de la brigada forestal y funciones de los integrantes',
        descripcion:
            'Se sugiere que la brigada forestal esté conformada como mínimo por: un jefe de brigada, un botánico, un auxiliar técnico y dos coinvestigadores. Claro está que, según la zona, es posible que la conformación cambie.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=24',
    },
    {
        id: 'Conglomerado2',
        titulo: 'Configuración y uso de navegadores gps',
        descripcion:
            'En el marco del IFN, los equipos empleados para el posicionamiento y localización de los centros de conglomerados corresponden fundamentalmente a navegadores GPS. Estos equipos permiten alcanzar errores del orden de los 2-3 m de la posición real, lo que implica el uso de otras herramientas que permitan reducir estos errores y no propagarlos a las demás posiciones o puntos del conglomerado',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=26',
    },
    {
        id: 'Conglomerado3',
        titulo: 'Levantamiento de líneas de trayectoria',
        descripcion:
            'En el centro de SPF 1 se sitúa la brújula. A partir de ese punto se localiza el Norte (360° es 0°) hacia SPF 2. Se debe desplazar una persona con cinta métrica realizando estacionamientos a una distancia aproximada a 20m hasta llegar a 80 m para fijar el centro de la subparcela (Figura 5). Igualmente para SPF 3, localizada al Oriente (Azimut = 90°), SPF 4, al Sur (Azimut = 180°) y finalmente, SPF 5 al Occidente (Azimut = 270°).',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=28',
    },
    {
        id: 'Conglomerado4',
        titulo: 'Corrección de distancias por pendientes',
        descripcion:
            'Se debe usar el clinómetro para corregir las distancias por segmentos o tramos, para medir la pendiente desde el lugar donde se encuentra la brújula en dirección al punto donde se desea medir la distancia.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=30',
    },
    {
        id: 'Conglomerado5',
        titulo: 'Localización del conglomerado',
        descripcion:
            'Una vez conformada la brigada forestal, se procede a realizar el desplazamiento hacia las zonas de muestreo, de acuerdo al modelo de accesibilidad, la ruta propuesta y los costos asociados.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=34',
    },
    {
        id: 'Conglomerado6',
        titulo: 'Ruta al campamento',
        descripcion:
            'Se planifica el sitio y hora de salida y se convoca a la brigada forestal para dar inicio al desplazamiento.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=40',
    },
    {
        id: 'Conglomerado7',
        titulo: 'Ruta al conglomerado',
        descripcion:
            'Se prepara el GPS y se inicia el desplazamiento desde el campamento hasta el conglomerado, registrando la ruta correspondiente (Tracklog).',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=44',
    },
    {
        id: 'Conglomerado8',
        titulo: 'Esquema del conglomerado',
        descripcion:
            'El establecimiento del conglomerado se inicia con la localización del centro de la subparcela uno (SPF-1), a partir de las coordenadas preestablecidas en el marco geo estadístico del IFN.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=48',
    },
];

const Manual = ({ onSeleccionarPDF }) => {
    const [activeSection, setActiveSection] = useState({ tipo: '', key: '' });

    const handleSelect = (key, tipo, secciones) => {
        if (activeSection.tipo === tipo && activeSection.key === key) {
            // Si se vuelve a hacer clic en el mismo ítem, lo cierra
            setActiveSection({ tipo: '', key: '' });
            onSeleccionarPDF('');
        } else {
            setActiveSection({ tipo, key });
            const sec = secciones[parseInt(key)];
            if (sec) {
                onSeleccionarPDF(sec.pdfUrl, sec.id);
            }
        }
    };

    return (
        <div className="manual-container">
            <h4 className="mb-3 titulo-manual">Manual de Consulta</h4>

            {/* Sección Introducción */}
            <h5 className="seccion-manual">Sección 0 - Introducción</h5>
            <Accordion
                activeKey={activeSection.tipo === 'intro' ? activeSection.key : ''}
                onSelect={(key) => handleSelect(key, 'intro', seccionesIntroduccion)}
            >
                {seccionesIntroduccion.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'intro' && activeSection.key === index.toString() && (
                                    <button
                                        className="boton-ver"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onSeleccionarPDF(sec.pdfUrl, sec.id);
                                        }}
                                    >
                                        Volver a cargar PDF
                                    </button>
                                )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

<br />
            {/* Sección Conglomerados */}
            <h5 className="seccion-manual">Sección 1 - Establecimiento de conglomerado</h5>
            <Accordion
                activeKey={activeSection.tipo === 'conglo' ? activeSection.key : ''}
                onSelect={(key) => handleSelect(key, 'conglo', seccionesConglomerados)}
            >
                {seccionesConglomerados.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'conglo' && activeSection.key === index.toString() && (
                                    <button
                                        className="boton-ver"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onSeleccionarPDF(sec.pdfUrl, sec.id);
                                        }}
                                    >
                                        Volver a cargar PDF
                                    </button>
                                )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default Manual;

