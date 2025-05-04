import { useEffect, useMemo, useState } from 'react';
import { useFetch } from '../data/useFetch';

export function useSuelos(conglomeradoId, subparcela) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        const base = 'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/suelo';

        if (conglomeradoId && subparcela && subparcela !== 'Todas') {
            setUrl(`${base}/obtener-subparcela-suelo/${conglomeradoId}/${subparcela}`);
        } else if (conglomeradoId) {
            setUrl(`${base}/obtener-suelo/${conglomeradoId}`);
        } else {
            setUrl(`${base}/obtener-todos-suelo`);
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
