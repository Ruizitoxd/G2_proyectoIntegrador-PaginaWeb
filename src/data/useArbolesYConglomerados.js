
import { useEffect, useMemo, useState } from 'react';
import { useFetch } from '../data/useFetch';

export function useArboles(conglomeradoId, subparcela) {
    const [url, setUrl] = useState('');

    useEffect(() => {
        const base = 'https://back-end-inventarionacional.onrender.com/api/arbol';

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
    especie: item.especie
}));

    }, [data]);

    return { arboles, loading };
}
