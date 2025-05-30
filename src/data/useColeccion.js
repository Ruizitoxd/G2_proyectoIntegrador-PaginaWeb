import { useEffect, useMemo, useState } from 'react';
import { useFetch } from '../data/useFetch';

export function useColeccion(conglomeradoId, subparcela) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        const base = 'https://back-end-inventarionacional.onrender.com/api/ColeccionBotanica';

        if (conglomeradoId && subparcela && subparcela !== 'Todas') {
            setUrl(`${base}/obtener-subParcela-ColeccionBotanico/${conglomeradoId}/${subparcela}`);
        } else if (conglomeradoId) {
            setUrl(`${base}/obtener-ColeccionBotanico/${conglomeradoId}`);
        } else {
            setUrl(`${base}/obtener-todos-ColeccionBotanico`);
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
