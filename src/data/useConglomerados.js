// src/hooks/useConglomerados.js
import { useEffect, useMemo, useState } from 'react';
import { useFetch } from '../data/useFetch';

export function useConglomerados(region, posEstrato) {
    const [url, setUrl] = useState('');

    // Construcción de la URL basada en los filtros seleccionados
    useEffect(() => {
        const base = 'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/conglomerado';

        if (region && posEstrato) {
            // Si hay región y postEstrato
            setUrl(`${base}/ObtenerConglomeradoPorPostEstratoYRegion/${posEstrato}/${region}`);
        } else if (region) {
            // Solo región
            setUrl(`${base}/ObtenerConglomeradoPorRegion/${region}`);
        } else if (posEstrato) {
            // Solo postEstrato
            setUrl(`${base}/ObtenerConglomeradoPorPostEstrato/${posEstrato}`);
        } else {
            // Ningún filtro (todos)
            setUrl(`${base}/obtener-id-conglomerado`);
        }
    }, [region, posEstrato]);

    const { data } = useFetch(url);

    const conglomerados = useMemo(() => {
        if (!data || !Array.isArray(data)) return [];
        return data.map((item) => ({
            id: item.id,
            latitud: parseFloat(item.latitud),
            longitud: parseFloat(item.longitud),
            observaciones: item.observaciones,
            region: item.region,
            posEstrato: item.posEstrato,
        }));
    }, [data]);

    // Mostrar por consola los datos cargados
    useEffect(() => {
        if (conglomerados.length > 0) {
            console.log('Lista de conglomerados cargados:');
            conglomerados.forEach((item, index) => {
                console.log(`Conglomerado ${index + 1}:`, item);
            });
        }
    }, [conglomerados]);

    return conglomerados;
}
