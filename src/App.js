import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from './pages/Inicio';
import MapaConglomerados from './pages/MapaConglomerados';
import TablaArboles from './pages/TablaArboles';
import TablaSuelos from './pages/TablaSuelos';
import TablaColeccionBotanica from './pages/TablaColeccionBotanica';
import ManualDeConsulta from './pages/ManualDeConsulta';
import Login from './pages/Login';





import DashboardApp from './pages/Dashboard';

// En tus rutas:



function AppContent() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/Login";

    return (
        <>
            {/* Decidir si mostrar el navbar y el header o no */}
            {!isLoginPage && <Header />}
            {!isLoginPage && <Navbar />}
             
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/MapaConglomerados" element={<MapaConglomerados />} />
                <Route path='/TablaArboles' element={<TablaArboles />} />
                <Route path='/TablaSuelos' element={<TablaSuelos />} />
                <Route path='/TablaColeccionBotanica' element={<TablaColeccionBotanica />} />
                <Route path='/ManualDeConsulta' element={<ManualDeConsulta />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Excel/*' element ={<DashboardApp/>}/> 

            </Routes>

            {/* Decidir si mostrar el footer o no */}
            {!isLoginPage && <Footer />}
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
