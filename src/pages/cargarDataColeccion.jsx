import UploadExcel from "../components/subirExcel";
import { useState } from "react";
import Tabla from "../components/Tabla";

function CargarConglomerado() {
  const [conglomerados, setConglomerados] = useState([]);
  const [subparcelas, setSubparcelas] = useState([]);
  const [columns, setColumns] = useState([]);
  const [mostrarSubparcelas, setMostrarSubparcelas] = useState(false);

  const encabezadosEsperados = ["id", "latitud", "longitud", "observaciones", "region", "posEstrato"];

  const generarSubparcelas = (conglomerados) => {
    const desplazamiento = 80;
    const subparcelas = [];

    conglomerados.forEach((cong) => {
      const { id, latitud, longitud } = cong;
      const lat = parseFloat(latitud);
      const lon = parseFloat(longitud);

      for (let i = 1; i <= 5; i++) {
        let nuevaLat = lat;
        let nuevaLon = lon;

        if (i === 2) nuevaLon += desplazamiento;
        else if (i === 3) nuevaLat += desplazamiento;
        else if (i === 4) nuevaLon -= desplazamiento;
        else if (i === 5) nuevaLat -= desplazamiento;

        subparcelas.push({
          id: `${id}-${i}`,
          latitud: nuevaLat.toFixed(6),
          longitud: nuevaLon.toFixed(6),
          numero: i,
          idConglomerado: id
        });
      }
    });

    return subparcelas;
  };

  const handleData = (jsonData) => {
    setConglomerados(jsonData);

    const subparcelasGeneradas = generarSubparcelas(jsonData);
    setSubparcelas(subparcelasGeneradas);

    // Definir columnas para la tabla visible actual
    const columnasGeneradas = Object.keys(jsonData[0]).map((key) => ({
      name: key,
      selector: (row) => row[key],
      sortable: true,
    }));
    setColumns(columnasGeneradas);
    setMostrarSubparcelas(false); // Por defecto mostrar conglomerados
  };

  const toggleTabla = () => {
    const nuevaVista = !mostrarSubparcelas;
    setMostrarSubparcelas(nuevaVista);

    const dataReferencia = nuevaVista ? subparcelas : conglomerados;

    if (dataReferencia.length > 0) {
      const columnasNuevas = Object.keys(dataReferencia[0]).map((key) => ({
        name: key,
        selector: (row) => row[key],
        sortable: true,
      }));
      setColumns(columnasNuevas);
    }
  };

  const datosAMostrar = mostrarSubparcelas ? subparcelas : conglomerados;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Subir datos de los Conglomerados</h2>
      <UploadExcel
        buttonClass="boton-azul"
        expectedHeaders={encabezadosEsperados}
        onData={handleData}
      />

      {conglomerados.length > 0 && (
        <button onClick={toggleTabla} style={{ margin: '10px 0' }}>
          {mostrarSubparcelas ? "Ver Conglomerados" : "Ver Subparcelas"}
        </button>
      )}

      {datosAMostrar.length > 0 && columns.length > 0 && (
        <Tabla columns={columns} data={datosAMostrar} />
      )}
    </div>
  );
}

export default CargarConglomerado;
