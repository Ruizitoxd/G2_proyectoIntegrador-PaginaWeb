// src/hooks/useConglomerados.js
import {  useEffect, useMemo } from 'react';
import { useFetch } from '../data/useFetch';

export function useConglomerados() {
    const { data } = useFetch(
        'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/conglomerado/obtener-id-conglomerado'
    );

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

    // Imprimir conglomerados una vez cargados
    useEffect(() => {
        if (conglomerados.length > 0) {
            console.log('Lista de conglomerados:');
            conglomerados.forEach((item, index) => {
                console.log(`Conglomerado ${index + 1}:`, item);
            });
        }
    }, [conglomerados]);

    return conglomerados;
}
