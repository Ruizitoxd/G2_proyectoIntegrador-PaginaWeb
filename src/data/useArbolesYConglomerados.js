
import { useEffect, useMemo, useState } from 'react';
import { useFetch } from '../data/useFetch';

export function useArboles(conglomeradoId, subparcela) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        const base = 'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/arbol';

        if (conglomeradoId && subparcela && subparcela !== 'Todas') {
            setUrl(`${base}/obtener-subParcela-arboles/${conglomeradoId}/${subparcela}`);
        } else if (conglomeradoId) {
            setUrl(`${base}/obtener-arboles/${conglomeradoId}`);
        } else {
            setUrl(`${base}/obtener-todos-arboles`);
        }
    }, [conglomeradoId, subparcela]);

    const { data, loading } = useFetch(url);

    const arboles = useMemo(() => {
        if (!data || !Array.isArray(data)) return [];

        return data.map((item) => ({
            Id: item.id,
            Tamaño: item.tamano,
            Condicion: item.condicion,
            Azimut: item.azimut,
            Distancia: item.distancia,
            Numero_fustes: item.numero_fustes,
            Diametro: item.diametro,
            Altura_fuste: item.altura_fuste,
            Forma_fuste: item.forma_fuste,
            Diametro_fuste: item.diametro_fuste,
            Altura_total: item.altura_total,
            Diametro_copa: item.diametro_copa,
        }));
    }, [data]);

    return { arboles, loading };
}
