import { useEffect, useMemo, useState } from 'react';
import { useFetch } from '../data/useFetch';

export function useColeccion(conglomeradoId, subparcela) {
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

    // Registrar entrada a la página una sola vez
    useEffect(() => {
        registrarEnHistorial('Entró a Colección Botánica');
    }, []);

    useEffect(() => {
        const base =
            'https://back-end-inventarionacional.onrender.com/api/ColeccionBotanica';

        if (conglomeradoId && subparcela && subparcela !== 'Todas') {
            setUrl(
                `${base}/obtener-subParcela-ColeccionBotanico/${conglomeradoId}/${subparcela}`
            );
        } else if (conglomeradoId) {
            setUrl(`${base}/obtener-ColeccionBotanico/${conglomeradoId}`);
        } else {
            setUrl(`${base}/obtener-todos-ColeccionBotanico`);
        }

        // Registrar filtros por separado
        if (conglomeradoId) {
            registrarEnHistorial(`Filtró por Conglomerado ${conglomeradoId}`);
        }

        if (subparcela && subparcela !== 'Todas') {
            registrarEnHistorial(`Filtró por Subparcela ${subparcela}`);
        }
    }, [conglomeradoId, subparcela]);

    const { data, loading } = useFetch(url);

    const Coleccion = useMemo(() => {
        if (!data || !Array.isArray(data)) return [];

        return data.map((item) => ({
            Id: item.id,
            Tamaño: item.tamaño,
            Nombre_Comun: item.nombrecomun,
            Nombre_Cientifico: item.especiecoleccion,
            Foto: item.foto,
        }));
    }, [data]);

    return { Coleccion, loading };
}
