import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import CargarArboles from "./cargarDataArboles";
import CargarSuelo from "./cargarDataSuelos";
import CargarConglomerado from "./cargarDataColeccion";

function DashboardApp() {
  return (
    <Routes>
      <Route path="/home" element={<Layout />}>
        <Route index element={<CargarConglomerado />} /> {/* /home */}
        <Route path="suelo" element={<CargarSuelo/>} /> {/* /home/suelo */}
        {/* Puedes agregar más rutas como: */}
        {/* <Route path="arboles" element={<OtroComponente />} /> */}
        <Route path="arboles" element={<CargarArboles />}/>
      </Route>
    </Routes>
  );
}

export default DashboardApp;
