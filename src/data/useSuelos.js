import { useEffect, useMemo, useState } from 'react';
import { useFetch } from '../data/useFetch';

export function useSuelos(conglomeradoId, subparcela) {
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
        registrarEnHistorial('Entró a Muestras de Suelos');
    }, []);

    useEffect(() => {
        const base =
            'https://back-end-inventarionacional.onrender.com/api/suelo';

        if (conglomeradoId && subparcela && subparcela !== 'Todas') {
            setUrl(
                `${base}/obtener-subparcela-suelo/${conglomeradoId}/${subparcela}`
            );
        } else if (conglomeradoId) {
            setUrl(`${base}/obtener-suelo/${conglomeradoId}`);
        } else {
            setUrl(`${base}/obtener-todos-suelo`);
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

    const suelo = useMemo(() => {
        if (!data || !Array.isArray(data)) return [];

        return data.map((item) => ({
            Id: item.id,
            Carbono: item.carbono,
            Color: item.color,
            Fertilidad: item.fertilidad,
            Observaciones: item.observaciones,
        }));
    }, [data]);

    return { suelo, loading };
}
