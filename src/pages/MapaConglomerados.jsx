import React, { useEffect, useContext } from 'react';
import Mapa from '../components/Mapa';
import { AuthContext } from '../AuthContext';

function App() {
    const usuario = useContext(AuthContext);

    useEffect(() => {
        if (usuario && !sessionStorage.getItem('registro_mapa_actual')) {
            const historial = JSON.parse(
                sessionStorage.getItem('historial') || '[]'
            );
            historial.push({
                evento: 'Entró al Mapa',
                timestamp: new Date().toISOString(),
            });
            sessionStorage.setItem('historial', JSON.stringify(historial));

            // ✅ Marca temporal para evitar doble registro inmediato
            sessionStorage.setItem('registro_mapa_actual', 'true');

            // ✅ Se elimina después de 1 segundo para permitir futuros registros si sale y entra
            setTimeout(() => {
                sessionStorage.removeItem('registro_mapa_actual');
            }, 1000);
        }
    }, [usuario]);

    return (
        <div>
            <Mapa />
        </div>
    );
}

export default App;
