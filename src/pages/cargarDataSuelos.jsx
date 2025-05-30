
import UploadExcel from "../components/subirExcel";
import { useState } from "react";
import Tabla from "../components/Tabla";

function CargarSuelo() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

const encabezadosEsperados = ["id", "carbono", "color", "fertilidad","observaciones","idSud-parcela"];

  const handleData = (jsonData) => {
    setData(jsonData);

    // Generar columnas dinámicamente desde los encabezados del archivo
    if (jsonData.length > 0) {
      const columnasGeneradas = Object.keys(jsonData[0]).map((key) => ({
        name: key,
        selector: (row) => row[key],
        sortable: true,
      }));
      setColumns(columnasGeneradas);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
        <h2>Subir datos de los suelos</h2>
      <UploadExcel  buttonClass="boton-suelo"  expectedHeaders={encabezadosEsperados} onData={handleData} />
      
      {data.length > 0 && columns.length > 0 && (
        <Tabla columns={columns} data={data} />
      )}
    </div>
  );
}

export default CargarSuelo;

