import { Routes, Route } from 'react-router-dom';
import Layout from '../components/LayoutReporte';
import GenerarReporteGeneral from './GenerarReporteGeneral';
import GenerarReporteEspecifico from './GenerarReporteEspecifico';

export default function DashboardReportes() {
    return (
        <Routes>
            <Route path="/home" element={<Layout />}>
                <Route index element={<GenerarReporteGeneral />} />
                <Route
                    path="Especifico"
                    element={<GenerarReporteEspecifico />}
                />
            </Route>
        </Routes>
    );
}
