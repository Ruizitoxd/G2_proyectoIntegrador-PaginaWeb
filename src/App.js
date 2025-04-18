import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Inicio from './pages/Inicio';
import MapaConglomerados from './pages/MapaConglomerados';

function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/MapaConglomerados" element={<MapaConglomerados />} />
            </Routes>
        </Router>
    );
}

export default App;