import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Menu from "./pages/MenuConglomerado"

import Inicio from './pages/Inicio';
import MapaConglomerados from './pages/MapaConglomerados';
import TablaArboles from './pages/TablasArboles'
import TablasSuelos from './pages/TablaSuelos'
import TablaColeccionBotanica from './pages/TabasColeccionBotanica'

function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/MapaConglomerados" element={<MapaConglomerados />} />
                <Route path='/TablaArboles' element={<TablaArboles/>}/>
                <Route path='/MenuConglomerado'element={<Menu/>}/>
                <Route path='/TablaSuelos' element={<TablasSuelos/>}/>
                <Route path='/TablaColeccionBotanica' element={<TablaColeccionBotanica/>}/>
            </Routes>  
        </Router>
    );
}

export default App;