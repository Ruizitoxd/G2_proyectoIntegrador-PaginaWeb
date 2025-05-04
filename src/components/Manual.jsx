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
        subventanas: [
            {
                nombre: '1.1.1 ID Conglomerado - 1.1.2 Diligenciado por - 1.1.3 Fecha - 1.1.4 Brigada',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=36',
            },
            {
                nombre: '1.1.5 Fechas - 1.1.6 Ubicación',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=37',
            },
            {
                nombre: '1.1.7 Coordenadas - 1.1.8 Observaciones generales',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=39',
            },
        ],
    },
    {
        id: 'Conglomerado6',
        titulo: 'Ruta al campamento',
        descripcion:
            'Se planifica el sitio y hora de salida y se convoca a la brigada forestal para dar inicio al desplazamiento.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=40',
        subventanas: [
            {
                nombre: '1.2.1 ID Conglomerado - 1.2.2 Diligenciado - 1.2.3 Fecha - por - 1.2.4 Desde población más cercana al campamento o donde se pernocta',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=42',
            },
            {
                nombre: '1.2.5 Puntos de referencia 1 - 1.2.6 Croquis 1 - 1.2.7 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=43',
            },
        ],
    },
    {
        id: 'Conglomerado7',
        titulo: 'Ruta al conglomerado',
        descripcion:
            'Se prepara el GPS y se inicia el desplazamiento desde el campamento hasta el conglomerado, registrando la ruta correspondiente (Tracklog).',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=44',
        subventanas: [
            {
                nombre: '1.3.1 ID Conglomerado - 1.3.2 Diligenciado por - 1.3.3 Fecha - 1.3.4 Desde el campamento al conglomerado',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=46',
            },
            {
                nombre: '1.3.5 Puntos de referencia 2 - 1.3.5 Puntos de referencia 2 - 1.3.7 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=47',
            },
        ],
    },
    {
        id: 'Conglomerado8',
        titulo: 'Esquema del conglomerado',
        descripcion:
            'El establecimiento del conglomerado se inicia con la localización del centro de la subparcela uno (SPF-1), a partir de las coordenadas preestablecidas en el marco geo estadístico del IFN.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=48',
        subventanas: [
            {
                nombre: '1.4.1 ID Conglomerado - 1.4.2 Diligenciado por - 1.4.3 Fecha - 1.4.4 Esquema del conglomerado - 1.4.5 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=50',
            },
        ],
    },
];

// Sección 2 - Subparcelas
const seccionesestablecimientodesubparcelas = [
    {
        id: 'Subparcelas1',
        titulo: 'Puntos de referencia',
        descripcion:
            'Los puntos de referencia son elementos del paisaje que ayudan en un futuro a regresar y localizar nuevamente al centro de cada subparcela del conglomerado. Los puntos de referencia deben ser visibles y reconocibles fácilmente, estos pueden ser árboles, rocas, cruces de quebradas, Estos puntos de referencia deben tener un carácter permanente y no importa si se encuentran fuera o dentro de la subparcela',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=54',
    },

    {
        id: 'Subparcelas2',
        titulo: 'Inclinaciones por pendiente',
        descripcion:
            'En cada subparcela con la ayuda de un clinómetro se mide la pendiente o ángulo de inclinación que hay desde el centro de la subparcela a ocho puntos localizados a 15 m y 45°, los cuales están numerados desde 1 al Norte, 2 al Nororiente a 45° hasta 8 a 315° (Figura 15). Para esta medición resulta muy importante anotar el signo del ángulo de medición',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=55',
    },

    {
        id: 'Subparcelas3',
        titulo: 'Coberturas y alteraciones',
        descripcion:
            'Mediante una inspección visual del área total de cada subparcela en el conglomerado se busca identificar coberturas presentes y las posibles alteraciones.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=56',
    },

    {
        id: 'Subparcelas4',
        titulo: 'Subparcelas',
        descripcion:
            'Se marcan los centros de las subparcelas en el GPS y se registran las coordenadas en el formato F2.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=58',
        subventanas: [
            {
                nombre: '2.1 ID Conglomerado - 2.2 Diligenciado por - 2.3 Fecha - 2.4 Conglomerados',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=60',
            },
            {
                nombre: '2.4 Conglomerados',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=61',
            },

            {
                nombre: '2.5 Puntos de referencia',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=62',
            },

            {
                nombre: '2.6 Esquema de la subparcela - 2.7 Inclinación por pendiente - 2.8 Coberturas y alteraciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=63',
            },

            {
                nombre: '2.9 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=64',
            },
        ],
    },
];

// Sección 3 - Registro y medición de individuos
const seccionesregistroymediciondeindividuos = [
    {
        id: 'MedicionIndividuos1',
        titulo: 'Variables de medición por categoría de tamaño',
        descripcion:
            'Es necesario establecer las variables de interés a tomar en campo, teniendo en cuenta las diferentes categorías de tamaño (Cuadro 2). Los individuos con más de un tallo (bifurcaciones) serán medidos siempre y cuando la bifurcación se encuentre por debajo de 1,3 m y que el tallo cumpla con el tamaño del diámetro para su inclusión.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=68',
    },

    {
        id: 'MedicionIndividuos2',
        titulo: 'Orden de registro y medición de individuos',
        descripcion:
            'La medición se realizará comenzando desde la posición del árbol más cercano en dirección al Norte y desde el centro de la subparcela hacia el extremo, siguiendo las manecillas del reloj (Figura 17). ',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=69',
    },

    {
        id: 'MedicionIndividuos3',
        titulo: 'Posición de los individuos',
        descripcion:
            'Se toma el azimut y la distancia horizontal. Se registra el valor del azimut observando la proyección de la mitad o centro geográfico del individuo y la distancia se toma a un lado del tallo en la parte media (Figura 19).',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=71',
    },

    {
        id: 'MedicionIndividuos4',
        titulo: 'Medición del diámetro de los individuos',
        descripcion:
            'La medición del diámetro se efectúa con ayuda de una vara dimensionada a 1,3 m de longitud que servirá para la medición del diámetro a la altura del pecho (DAP), como para ponerla en el centro del individuo y ayudar a tomar el azimut y la distancia horizontal.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=72',
        subventanas: [
            {
                nombre: 'Tallos únicos - Tallos únicos',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=73',
            },
            {
                nombre: 'Tallos con raíces - Tallos múltiples',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=74',
            },

            {
                nombre: 'Tallos con rebrotes - Tallos inclinados',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=75',
            },

            {
                nombre: 'Tallos en terrenos inclinados',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=76',
            },
        ],
    },

    {
        id: 'MedicionIndividuos5',
        titulo: 'Medición de alturas de los individuos',
        descripcion:
            'La altura es una medida indirecta, ya que se requieren cálculos previos para obtener su valor. Esta medición se efectuará al cien por ciento (100%) o todos los individuos encontrados y registrados en el conglomerado',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=77',
        subventanas: [
            {
                nombre: 'Altura total - Altura del fuste',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=79',
            },
        ],
    },

    {
        id: 'MedicionIndividuos6',
        titulo: 'Registro y medición de individuos',
        descripcion:
            'Desde el centro de cada subparcela, se realiza una inspección visual con el fin de identificar los posibles individuos a medir y registrar, en cada categoría de tamaño (B, L, F y FG).',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=80',
        subventanas: [
            {
                nombre: '3.1 ID Conglomerado - 3.2 Diligenciado por - 3.3 Fecha - 3.4 Subparcela - 3.5 Tamaño del individuo - 3.6 Número de individuo ID',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=82',
            },

            {
                nombre: '3.7 Condición - 3.8 Azimut - 3.9 Distancia horizontal - 3.10 Tallo único - 3.11 Tallo múltiple',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=83',
            },

            {
                nombre: '3.12 Número del fuste - 3.13 Equipo 1 - 3.14 Diámetro 1 - 3.15 Diámetro 2',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=84',
            },

            {
                nombre: '3.16 Punto de observación de la medida POM - 3.17 Equipo 2 - 3.18 Distancia horizontal para altura - 3.19 V - altura',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=85',
            },

            {
                nombre: '3.20 V + altura fuste - 3.21 V + altura total - 3.22 Altura de fuste - 3.24 Forma del fuste - 3.23 Altura total',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=86',
            },

            {
                nombre: '3.25 Daño - 3.26 Penetración en cm - 3.27 Penetración No. golpes - 3.28 Colector y número de colección - 3.29 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=87',
            },
        ],
    },
    // Puedes duplicar más objetos aquí
];

// Sección 4 - Registro y medición de individuos
const seccionescoleccionbotanica = [
    {
        id: 'Coleccionbotanica1',
        titulo: 'Colección de muestras botánicas',
        descripcion:
            'Para la colección de muestras botánicas es imprescindible el uso del cortarramas que llega hasta 12 metros. Por otro lado, en muchos de los casos es necesario escalar, ya que algunos individuos de interés tienen una altura considerablemente grande (Figura 32).',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=90',
    },

    {
        id: 'Coleccionbotanica2',
        titulo: 'Prensado de muestras botánicas',
        descripcion: '',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=92',
    },

    {
        id: 'Coleccionbotanica3',
        titulo: 'Colección botánica',
        descripcion:
            'El primer paso, una vez se está en el conglomerado en la SPF1, presto a colectar, el botánico, describe la fisionomía del bosque, se anotan en la libreta de campo aspectos generales del dosel, sotobosque, epifitismo, presencia de lianas, pendiente y características muy evidentes a simple vista. Asimismo, se registran aspectos sobresalientes del área como caños, rocas, deslizamientos o presencia humana no itinerante; entre otras.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=94',
        subventanas: [
            {
                nombre: '4.1.1 ID Conglomerado - 4.1.2 Diligenciado por - 4.1.3 Fecha - 4.1.4 Tamaño del individuo - 4.1.5 Número de individuo ID - 4.1.6 Nombre común',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=96',
            },

            {
                nombre: '4.1.7 Determinación en campo o igualación - 4.1.8 Observaciones del individuo - 4.1.9 Colector y número de colección - 4.1.10 Colectada - 4.1.11 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=97',
            },
        ],
    },

    {
        id: 'Coleccionbotanica4',
        titulo: 'Envío de muestras botánicas a herbario',
        descripcion:
            'Para el envío del material botánico a los herbarios regionales, los costales deben ser notoriamente rotulados con marcador permanente indeleble con: “Inventario Forestal Nacional Colombia. Instituto de Hidrología, Meteorología y Estudios Ambientales - IDEAM. Material botánico alcoholizado. Sin ningún valor comercial. Extremadamente delicado”. Y también se marca el nombre, dirección y teléfono del herbario hacia el cual se remitirá el material. Además incluya el número del costal y el total que se envían (ej. 1 de 5, 2 de 5, etc.).',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=98',
        subventanas: [
            {
                nombre: '4.2.1 ID Conglomerado - 4.2.2 Diligenciado por - 4.2.3 No. Paquete de envío a herbario - 4.2.4 Contiene muestras del conglomerado y subparcelas',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=100',
            },

            {
                nombre: '4.2.5 Cantidad de ejemplares en paquete - 4.2.6 Fechas de colección o rango - 4.2.7 Fechas envío - 4.2.8 Fechas de recibido herbario - 4.2.9 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=101',
            },
        ],
    },
    // Puedes duplicar más objetos aquí
];

// Sección 5 - Registro y medición de individuos
const seccionessuelos = [
    {
        id: 'Suelos1',
        titulo: 'Muestreo de suelos',
        descripcion:
            'En esta sección del Manual de Campo del IFN se describe el procedimiento para la toma de muestras de suelos para estimar los contenidos de carbono y la fertilidad natural de los suelos del conglomerado del IFN.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=104',
    },

    {
        id: 'Suelos2',
        titulo: 'Importancia para el análisis',
        descripcion:
            'En esta sección del Manual de Campo del IFN se describe el procedimiento para la toma de muestras de suelos para estimar los contenidos de carbono y la fertilidad natural de los suelos del conglomerado del IFN.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=105',
        subventanas: [
            {
                nombre: '1. Densidad aparente - 2. Contenido de carbono',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=106',
            },

            {
                nombre: '3. Fertilidad de suelos',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=107',
            },
        ],
    },

    {
        id: 'Suelos3',
        titulo: 'Muestreo de suelos',
        descripcion:
            'Se prepara el punto de muestreo limpiando la superficie, retirando hojas y ramas.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=108',
        subventanas: [
            {
                nombre: '5.1.1 ID Conglomerado - 5.1.2 Diligenciado por - 5.1.3 Fecha - 5.1.4 Azimut - 5.1.5 Distancia - 5.1.6 Profundidad',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=110',
            },

            {
                nombre: '5.1.7 Descripción de los sitios de muestreo',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=111',
            },

            {
                nombre: '5.1.8 Muestras - 5.1.9 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=112',
            },
        ],
    },

    {
        id: 'Suelos4',
        titulo: 'Envío de muestras de suelo a laboratorio',
        descripcion:
            'Una vez las muestras de suelo estén empacadas y debidamente etiquetadas, se hace un solo paquete con las once (11) muestras por conglomerado.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=114',
        subventanas: [
            {
                nombre: '5.2.1 ID Conglomerado - 5.2.2 Diligenciado por - 5.2.3 No. Paquete de envío a laboratorio - 5.2.4 Contiene muestras del conglomerado y subparcelas',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=116',
            },

            {
                nombre: '5.2.5 Cantidad de muestras en paquete - 5.2.6 Fecha de muestreo o rango - 5.2.7 Fechas envío - 5.2.8 Fechas de recibido laboratorio - 5.2.9 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=117',
            },
        ],
    },
    // Puedes duplicar más objetos aquí
];

// Sección 6 - Detritos de Madera
const seccionesdetritosdemadera = [
    {
        id: 'detritosmadera1',
        titulo: 'Árboles muertos en pie (amp) y tocones (to)',
        descripcion:
            'Simultáneamente con la medición y registro de los árboles vivos de cada subparcela (Formato F3) se censarán todos los AMP con DAP ≥ 10 cm, incluyendo los TO. El formato F3. Medición y registro de individuos, incluye los campos para registrar el valor de la penetración de cada MP o TO.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=120',
    },

    {
        id: 'detritosmadera2',
        titulo: 'Muestreo de detritos en transectos',
        descripcion:
            'Los detritos son árboles muertos, piezas de madera y ramas que han caído al suelo. Según el tamaño, los detritos se clasifican en dos tipos: detritos finos de madera (DFM) con diámetro entre 2 cm – 19,9 cm y detritos gruesos de madera (DGM) con diámetro ≥ 20 cm.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=122',
        subventanas: [
            {
                nombre: 'A. Detritos gruesos de madera (DGM)',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=123',
            },

            {
                nombre: 'A1 - A2',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=124',
            },

            {
                nombre: 'A3',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=125',
            },

            {
                nombre: 'A4 - A5',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=126',
            },

            {
                nombre: 'B. Detritos finos de madera (DFM) - C. Volumen fresco de detritos',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=127',
            },
        ],
    },

    {
        id: 'detritosmadera3',
        titulo: 'Muestreo de detritos de madera en transectos',
        descripcion: 'Muestreo de detritos de madera en transectos',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=128',
        subventanas: [
            {
                nombre: '6.1.1 ID Conglomerado - 6.1.2 Diligenciado por - 6.1.3 Fecha - 6.1.4 Transecto - 6.1.5 Sección',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=130',
            },

            {
                nombre: '6.1.6 No. pieza - 6.1.7 Tipo de detrito - 6.1.8 Distancia - 6.1.9 Diámetro',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=131',
            },

            {
                nombre: '6.1.10 Azimut - 6.1.11 Inclinación de la pieza - 6.1.12 Penetración (6.1.12.1 Menor a 20 cm - 6.1.12.2 Penetración No. golpes)',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=132',
            },

            {
                nombre: '6.1.13 Peso de la rodaja en gramos - 6.1.14 Espesor de la rodaja en cm - 6.1.15 Peso fresco de la muestra en gramos - 6.1.16 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=133',
            },
        ],
    },

    {
        id: 'detritosmadera4',
        titulo: 'Envío de piezas de detritos de madera a  laboratorio',
        descripcion:
            'Es necesario hacer un inventario de las muestras de madera colectadas, verificando que cada una esté debidamente empacada y etiquetada',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=134',
        subventanas: [
            {
                nombre: '6.2.1 ID Conglomerado - 6.2.2 Diligenciado por - 6.2.3 No. Paquete de envío a laboratorio - 6.2.4 Contiene muestras del conglomerado y subparcelas',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=136',
            },

            {
                nombre: '6.2.5 Cantidad de muestras en paquete - 6.2.6 Fecha de muestreo o rango - 6.2.7 Fechas envío - 6.2.8 Fechas de recibido laboratorio - 6.2.9 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=137',
            },
        ],
    },
    // Puedes duplicar más objetos aquí
];

// Sección 7 - Equipos y materiales
const seccionesequiposymateriales = [
    {
        id: 'equiposymateriales1',
        titulo: 'Listados de equipos y materiales para trabajo de campo',
        descripcion:
            'A continuación se relacionan los materiales y equipos necesarios para el establecimiento de un conglomerado con colección botánica, muestreo de suelos y de detritos de madera. Este listado indica los equipos y las cantidades mínimas que requiere cada brigada forestal',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=140',
        subventanas: [
            {
                nombre: '1. Equipos y materiales para establecimiento de conglomerados y subparcelas',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=140',
            },

            {
                nombre: '2. Equipos y materiales para colección botánica - 3. Equipos y materiales para colección de suelos - 4. Equipos y materiales para el muestreo de detritos',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=141',
            },
        ],
    },

    {
        id: 'equiposymateriales2',
        titulo: 'Equipos y materiales',
        descripcion:
            'Antes de cada alistamiento para una salida de campo es necesario que las brigadas de campo preparen los equipos y materiales a utilizar. El Apéndice 1 Sección 7, es una referencia para esta labor.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=142',
        subventanas: [
            {
                nombre: '7.1.1 ID Conglomerado - 7.1.2 Diligenciado por - 7.1.3 Fecha - 7.1.4 Elemento - 7.1.5 Cantidad',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=144',
            },

            {
                nombre: '7.1.6 Placa No. - 7.1.7 Condición - 7.1.8 Persona - 7.1.9 ID Días - 7.1.10 Observaciones',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=145',
            },
        ],
    },
    // Puedes duplicar más objetos aquí
];

// Sección 8 - Seguimiento a actividades
const seccionesseguimientoaactividades = [
    {
        id: 'seguimientoaactividades1',
        titulo: 'Seguimiento a actividades',
        descripcion:
            'Prealistamiento: Consecución de equipos, insumos y materiales; contactos con trabajadores locales y consecución de alimentos y preparación de logística para desplazamiento.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=150',
        subventanas: [
            {
                nombre: '8.1.1 ID Conglomerado - 8.1.2 Diligenciado por - 8.1.3 Fecha - 8.1.4 Clima general',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=152',
            },

            {
                nombre: '8.1.5 Duración/Cantidad - 8.1.6 Reporte de incidentes o accidentes ocurridos durante la jornada - 8.1.7 Novedades de personal - 8.1.8. Observaciones y comentarios generales',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=153',
            },
        ],
    },
    // Puedes duplicar más objetos aquí
];

// Sección 9 - Registro fotográfico
const seccionesregistrofotografico = [
    {
        id: 'Registrofotografico',
        titulo: 'Listado de fotografías - Fotografía 1 - 5',
        descripcion:
            'Sumado a las actividades propias del muestreo en campo, descritas a lo largo del presente manual, el IFN contempla de manera adicional, la generación de un anexo o registro fotográfico en los lugares en los cuales se establecieron los conglomerados, a fin de tener evidencias que soporten y documenten el trabajo realizado en terreno y contar con los elementos necesarios que faciliten su ubicación en visitas posteriores.',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=156',
        subventanas: [
            {
                nombre: 'Listado de fotografías - Fotografía 6 - 10',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=157',
            },
        ],
    },
    // Puedes duplicar más objetos aquí
];

// Sección apendice1 - Especificaciones del penetrometro humano
const seccionesapendice1 = [
    {
        id: 'Apendice1',
        titulo: 'Especificaciones del penetrómetro dinámico',
        descripcion:
            'El penetrómetro dinámico es un instrumento utilizado para medir la dureza de la madera muerta que se puede asociar con el grado de descomposición. Este instrumento está fabricado en acero inoxidable con una densidad entre 7700 kg/m3 – 8300 kg/m3 y armado tiene una extensión total de 60 cm y pesa 1300 g. El penetrómetro está compuesto por cinco partes (Figura 65).',
        pdfUrl: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=159',
        subventanas: [
            {
                nombre: 'Pieza A - Pieza B - Pieza C',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=160',
            },

            {
                nombre: 'Pieza D - Pieza E',
                url: 'https://visionamazonia.minambiente.gov.co/content/uploads/2023/04/Manual_IFN_Colombia_v4.pdf#page=161',
            },
        ],
    },
    // Puedes duplicar más objetos aquí
];

const Manual = ({ onSeleccionarPDF }) => {
    const [activeSection, setActiveSection] = useState({ tipo: '', key: '' });

    const handleSelect = (key, tipo, secciones) => {
        if (activeSection.tipo === tipo && activeSection.key === key) {
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
                activeKey={
                    activeSection.tipo === 'intro' ? activeSection.key : ''
                }
                onSelect={(key) =>
                    handleSelect(key, 'intro', seccionesIntroduccion)
                }
            >
                {seccionesIntroduccion.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'intro' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
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

            {/* Sección 1 - Congomerados */}
            <h5 className="seccion-manual">Sección 1 - Conglomerados</h5>
            <Accordion
                activeKey={
                    activeSection.tipo === 'mediciones1'
                        ? activeSection.key
                        : ''
                }
                onSelect={(key) =>
                    handleSelect(key, 'mediciones1', seccionesConglomerados)
                }
            >
                {seccionesConglomerados.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'mediciones1' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
                                            }}
                                        >
                                            Volver a cargar PDF
                                        </button>
                                    )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>

                            {/* Subventanas renderizadas solo si está activa esta sección */}
                            {activeSection.tipo === 'mediciones1' &&
                                activeSection.key === index.toString() &&
                                sec.subventanas && (
                                    <div className="subventanas-container">
                                        {sec.subventanas.map((sub, i) => (
                                            <div className="subventana" key={i}>
                                                <h6>{sub.nombre}</h6>
                                                <button
                                                    className="boton-ver"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSeleccionarPDF(
                                                            sub.url,
                                                            `${sec.id}-${i}`
                                                        );
                                                    }}
                                                >
                                                    Ver
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br />

            {/* Sección 2 - Subparcelas */}
            <h5 className="seccion-manual">
                Sección 2 - Establecimiento de subparcelas
            </h5>
            <Accordion
                activeKey={
                    activeSection.tipo === 'mediciones2'
                        ? activeSection.key
                        : ''
                }
                onSelect={(key) =>
                    handleSelect(
                        key,
                        'mediciones2',
                        seccionesestablecimientodesubparcelas
                    )
                }
            >
                {seccionesestablecimientodesubparcelas.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'mediciones2' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
                                            }}
                                        >
                                            Volver a cargar PDF
                                        </button>
                                    )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>

                            {/* Subventanas renderizadas solo si está activa esta sección */}
                            {activeSection.tipo === 'mediciones2' &&
                                activeSection.key === index.toString() &&
                                sec.subventanas && (
                                    <div className="subventanas-container">
                                        {sec.subventanas.map((sub, i) => (
                                            <div className="subventana" key={i}>
                                                <h6>{sub.nombre}</h6>
                                                <button
                                                    className="boton-ver"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSeleccionarPDF(
                                                            sub.url,
                                                            `${sec.id}-${i}`
                                                        );
                                                    }}
                                                >
                                                    Ver
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br />

            {/* Sección 3 - Registro y medición de individuos */}
            <h5 className="seccion-manual">
                Sección 3 - Registro y medición de individuos
            </h5>
            <Accordion
                activeKey={
                    activeSection.tipo === 'mediciones3'
                        ? activeSection.key
                        : ''
                }
                onSelect={(key) =>
                    handleSelect(
                        key,
                        'mediciones3',
                        seccionesregistroymediciondeindividuos
                    )
                }
            >
                {seccionesregistroymediciondeindividuos.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'mediciones3' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
                                            }}
                                        >
                                            Volver a cargar PDF
                                        </button>
                                    )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>

                            {/* Subventanas renderizadas solo si está activa esta sección */}
                            {activeSection.tipo === 'mediciones3' &&
                                activeSection.key === index.toString() &&
                                sec.subventanas && (
                                    <div className="subventanas-container">
                                        {sec.subventanas.map((sub, i) => (
                                            <div className="subventana" key={i}>
                                                <h6>{sub.nombre}</h6>
                                                <button
                                                    className="boton-ver"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSeleccionarPDF(
                                                            sub.url,
                                                            `${sec.id}-${i}`
                                                        );
                                                    }}
                                                >
                                                    Ver
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br />

            {/* Sección 4 - Colección botánica */}
            <h5 className="seccion-manual">Sección 4 - Colección botánica</h5>
            <Accordion
                activeKey={
                    activeSection.tipo === 'mediciones4'
                        ? activeSection.key
                        : ''
                }
                onSelect={(key) =>
                    handleSelect(key, 'mediciones4', seccionescoleccionbotanica)
                }
            >
                {seccionescoleccionbotanica.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'mediciones4' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
                                            }}
                                        >
                                            Volver a cargar PDF
                                        </button>
                                    )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>

                            {/* Subventanas renderizadas solo si está activa esta sección */}
                            {activeSection.tipo === 'mediciones4' &&
                                activeSection.key === index.toString() &&
                                sec.subventanas && (
                                    <div className="subventanas-container">
                                        {sec.subventanas.map((sub, i) => (
                                            <div className="subventana" key={i}>
                                                <h6>{sub.nombre}</h6>
                                                <button
                                                    className="boton-ver"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSeleccionarPDF(
                                                            sub.url,
                                                            `${sec.id}-${i}`
                                                        );
                                                    }}
                                                >
                                                    Ver
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br />

            {/* Sección 5 - Suelos */}
            <h5 className="seccion-manual">Sección 5 - Suelos</h5>
            <Accordion
                activeKey={
                    activeSection.tipo === 'mediciones5'
                        ? activeSection.key
                        : ''
                }
                onSelect={(key) =>
                    handleSelect(key, 'mediciones5', seccionessuelos)
                }
            >
                {seccionessuelos.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'mediciones5' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
                                            }}
                                        >
                                            Volver a cargar PDF
                                        </button>
                                    )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>

                            {/* Subventanas renderizadas solo si está activa esta sección */}
                            {activeSection.tipo === 'mediciones5' &&
                                activeSection.key === index.toString() &&
                                sec.subventanas && (
                                    <div className="subventanas-container">
                                        {sec.subventanas.map((sub, i) => (
                                            <div className="subventana" key={i}>
                                                <h6>{sub.nombre}</h6>
                                                <button
                                                    className="boton-ver"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSeleccionarPDF(
                                                            sub.url,
                                                            `${sec.id}-${i}`
                                                        );
                                                    }}
                                                >
                                                    Ver
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br />

            {/* Sección 6 - Detritos de madera */}
            <h5 className="seccion-manual">Sección 6 - Detritos de madera</h5>
            <Accordion
                activeKey={
                    activeSection.tipo === 'mediciones6'
                        ? activeSection.key
                        : ''
                }
                onSelect={(key) =>
                    handleSelect(key, 'mediciones6', seccionesdetritosdemadera)
                }
            >
                {seccionesdetritosdemadera.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'mediciones6' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
                                            }}
                                        >
                                            Volver a cargar PDF
                                        </button>
                                    )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>

                            {/* Subventanas renderizadas solo si está activa esta sección */}
                            {activeSection.tipo === 'mediciones6' &&
                                activeSection.key === index.toString() &&
                                sec.subventanas && (
                                    <div className="subventanas-container">
                                        {sec.subventanas.map((sub, i) => (
                                            <div className="subventana" key={i}>
                                                <h6>{sub.nombre}</h6>
                                                <button
                                                    className="boton-ver"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSeleccionarPDF(
                                                            sub.url,
                                                            `${sec.id}-${i}`
                                                        );
                                                    }}
                                                >
                                                    Ver
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br />

            {/* Sección 7 - Equipos y materiales */}
            <h5 className="seccion-manual">Sección 7 - Equipos y materiales</h5>
            <Accordion
                activeKey={
                    activeSection.tipo === 'mediciones7'
                        ? activeSection.key
                        : ''
                }
                onSelect={(key) =>
                    handleSelect(
                        key,
                        'mediciones7',
                        seccionesequiposymateriales
                    )
                }
            >
                {seccionesequiposymateriales.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'mediciones7' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
                                            }}
                                        >
                                            Volver a cargar PDF
                                        </button>
                                    )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>

                            {/* Subventanas renderizadas solo si está activa esta sección */}
                            {activeSection.tipo === 'mediciones7' &&
                                activeSection.key === index.toString() &&
                                sec.subventanas && (
                                    <div className="subventanas-container">
                                        {sec.subventanas.map((sub, i) => (
                                            <div className="subventana" key={i}>
                                                <h6>{sub.nombre}</h6>
                                                <button
                                                    className="boton-ver"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSeleccionarPDF(
                                                            sub.url,
                                                            `${sec.id}-${i}`
                                                        );
                                                    }}
                                                >
                                                    Ver
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br />

            {/* Sección 8 - Seguimiento a actividades */}
            <h5 className="seccion-manual">
                Sección 8 - Seguimiento a actividades
            </h5>
            <Accordion
                activeKey={
                    activeSection.tipo === 'mediciones8'
                        ? activeSection.key
                        : ''
                }
                onSelect={(key) =>
                    handleSelect(
                        key,
                        'mediciones8',
                        seccionesseguimientoaactividades
                    )
                }
            >
                {seccionesseguimientoaactividades.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'mediciones8' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
                                            }}
                                        >
                                            Volver a cargar PDF
                                        </button>
                                    )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>

                            {/* Subventanas renderizadas solo si está activa esta sección */}
                            {activeSection.tipo === 'mediciones8' &&
                                activeSection.key === index.toString() &&
                                sec.subventanas && (
                                    <div className="subventanas-container">
                                        {sec.subventanas.map((sub, i) => (
                                            <div className="subventana" key={i}>
                                                <h6>{sub.nombre}</h6>
                                                <button
                                                    className="boton-ver"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSeleccionarPDF(
                                                            sub.url,
                                                            `${sec.id}-${i}`
                                                        );
                                                    }}
                                                >
                                                    Ver
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br />

            {/* Sección 9 - Registro fotográfico */}
            <h5 className="seccion-manual">Sección 9 - Registro fotográfico</h5>
            <Accordion
                activeKey={
                    activeSection.tipo === 'mediciones9'
                        ? activeSection.key
                        : ''
                }
                onSelect={(key) =>
                    handleSelect(
                        key,
                        'mediciones9',
                        seccionesregistrofotografico
                    )
                }
            >
                {seccionesregistrofotografico.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'mediciones9' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
                                            }}
                                        >
                                            Volver a cargar PDF
                                        </button>
                                    )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>

                            {/* Subventanas renderizadas solo si está activa esta sección */}
                            {activeSection.tipo === 'mediciones9' &&
                                activeSection.key === index.toString() &&
                                sec.subventanas && (
                                    <div className="subventanas-container">
                                        {sec.subventanas.map((sub, i) => (
                                            <div className="subventana" key={i}>
                                                <h6>{sub.nombre}</h6>
                                                <button
                                                    className="boton-ver"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSeleccionarPDF(
                                                            sub.url,
                                                            `${sec.id}-${i}`
                                                        );
                                                    }}
                                                >
                                                    Ver
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br />

            {/* Sección Apendice1 - Especificaciones del penetrómetro dinámico */}
            <h5 className="seccion-manual">
                Apéndice 1 - Especificaciones del penetrómetro dinámico
            </h5>
            <Accordion
                activeKey={
                    activeSection.tipo === 'mediciones10'
                        ? activeSection.key
                        : ''
                }
                onSelect={(key) =>
                    handleSelect(key, 'mediciones10', seccionesapendice1)
                }
            >
                {seccionesapendice1.map((sec, index) => (
                    <Accordion.Item eventKey={index.toString()} key={sec.id}>
                        <Accordion.Header>
                            <div className="accordion-header-custom">
                                <span>{sec.titulo}</span>
                                {activeSection.tipo === 'mediciones10' &&
                                    activeSection.key === index.toString() && (
                                        <button
                                            className="boton-ver"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onSeleccionarPDF(
                                                    sec.pdfUrl,
                                                    sec.id
                                                );
                                            }}
                                        >
                                            Volver a cargar PDF
                                        </button>
                                    )}
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>{sec.descripcion}</p>

                            {/* Subventanas renderizadas solo si está activa esta sección */}
                            {activeSection.tipo === 'mediciones10' &&
                                activeSection.key === index.toString() &&
                                sec.subventanas && (
                                    <div className="subventanas-container">
                                        {sec.subventanas.map((sub, i) => (
                                            <div className="subventana" key={i}>
                                                <h6>{sub.nombre}</h6>
                                                <button
                                                    className="boton-ver"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSeleccionarPDF(
                                                            sub.url,
                                                            `${sec.id}-${i}`
                                                        );
                                                    }}
                                                >
                                                    Ver
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <br />
        </div>
    );
};

export default Manual;
