// src/data/useTodosConglomerados.js
import { useFetch } from './useFetch';

export function useTodosConglomerados() {
    const { data, loading } = useFetch(
        'https://back-end-inventarionacional-production-3ab1.up.railway.app/api/conglomerado/ObtenerTodosIdConglomerados'
    );

    return {
        conglomerados: data,
        loadingConglomerados: loading
    };
}
