import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import CargarArboles from "./cargarDataArboles";
import CargarSuelo from "./cargarDataSuelos";
import CargarConglomerado from "./cargarDataConglomerado";
import CargarColeccionBotanica from "./cargarDataColeccion";

function DashboardApp() {
  return (
    <Routes>
      <Route path="/home" element={<Layout />}>
        <Route index element={<CargarConglomerado />} /> 
        <Route path="suelo" element={<CargarSuelo/>} /> 
        <Route path="arboles" element={<CargarArboles />}/>
        <Route path="coleccion" element={<CargarColeccionBotanica/>}/>
      </Route>
    </Routes>
  );
}

export default DashboardApp;
