import { useEffect, useMemo, useState } from 'react';
import { useFetch } from '../data/useFetch';

export function useArboles(conglomeradoId, subparcela) {
    const [url, setUrl] = useState('');

    const registrarEnHistorial = (evento) => {
        const historial = JSON.parse(
            sessionStorage.getItem('historial') || '[]'
        );
        const timestamp = new Date().toISOString();

        if (
            historial.length === 0 ||
            historial[historial.length - 1].evento !== evento
        ) {
            historial.push({ evento, timestamp });
            sessionStorage.setItem('historial', JSON.stringify(historial));
        }
    };

    // Registrar entrada a la página solo una vez
    useEffect(() => {
        registrarEnHistorial('Entró a Muestras arbóreas');
    }, []);

    useEffect(() => {
        const base =
            'https://back-end-inventarionacional.onrender.com/api/arbol';

        if (conglomeradoId && subparcela && subparcela !== 'Todas') {
            setUrl(
                `${base}/obtener-subParcela-arboles/${conglomeradoId}/${subparcela}`
            );
        } else if (conglomeradoId) {
            setUrl(`${base}/obtener-arboles/${conglomeradoId}`);
        } else {
            setUrl(`${base}/obtener-todos-arboles`);
        }

        // Registrar cada filtro por separado
        if (conglomeradoId) {
            registrarEnHistorial(`Filtró por Conglomerado ${conglomeradoId}`);
        }

        if (subparcela && subparcela !== 'Todas') {
            registrarEnHistorial(`Filtró por Subparcela ${subparcela}`);
        }
    }, [conglomeradoId, subparcela]);

    const { data, loading } = useFetch(url);

    const arboles = useMemo(() => {
        if (!data || !Array.isArray(data)) return [];

        return data.map((item) => ({
            id: item.id,
            tamano: item.tamano,
            condicion: item.condicion,
            azimut: item.azimut,
            distancia: item.distancia,
            numeroFustes: item.numero_fustes,
            diametro: item.diametro,
            alturaFuste: item.altura_fuste,
            formaFuste: item.forma_fuste,
            diametroFuste: item.diametro_fuste,
            alturaTotal: item.altura_total,
            diametroCopa: item.diametro_copa,
            nombreComun: item.nombrecomun,
            especie: item.especie,
        }));
    }, [data]);

    return { arboles, loading };
}
