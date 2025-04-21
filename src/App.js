import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Menu from "./pages/MenuConglomerado";

import Inicio from './pages/Inicio';
import MapaConglomerados from './pages/MapaConglomerados';
import TablaArboles from './pages/TablaArboles';
import TablaSuelos from './pages/TablaSuelos';
import TablaColeccionBotanica from './pages/TablaColeccionBotanica';
import Login from './pages/Login';

function AppContent() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/Login";

    return (
        <>
            {!isLoginPage && <Header />}
            {!isLoginPage && <Navbar />}

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/MapaConglomerados" element={<MapaConglomerados />} />
                <Route path='/TablaArboles' element={<TablaArboles />} />
                <Route path='/MenuConglomerado' element={<Menu />} />
                <Route path='/TablaSuelos' element={<TablaSuelos />} />
                <Route path='/TablaColeccionBotanica' element={<TablaColeccionBotanica />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </>
    );
}

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}
