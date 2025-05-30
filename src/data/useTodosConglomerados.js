// src/data/useTodosConglomerados.js
import { useFetch } from './useFetch';

export function useTodosConglomerados() {
    const { data, loading } = useFetch(
        'https://back-end-inventarionacional.onrender.com/api/conglomerado/ObtenerTodosIdConglomerados'
    );

    return {
        conglomerados: data,
        loadingConglomerados: loading
    };
}
