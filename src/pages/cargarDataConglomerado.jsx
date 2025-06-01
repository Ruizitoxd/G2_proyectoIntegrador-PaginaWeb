import { useContext, useState } from 'react';
import UploadExcel from "../components/subirExcel";
import Tabla from "../components/Tabla";
import { AuthContext } from "../AuthContext"; 

function CargarConglomerado() {
  const [conglomerados, setConglomerados] = useState([]);
  const [subparcelas, setSubparcelas] = useState([]);
  const [columns, setColumns] = useState([]);
  const [mostrarSubparcelas, setMostrarSubparcelas] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const usuario = useContext(AuthContext);
  const userDocRef = usuario?.uid;
  const encabezadosEsperados = ["latitud", "longitud", "postestrato", "fechainicial", "fechafinal", "region"];

  const excelSerialDateToJSDate = (serial) => {
    if (typeof serial !== 'number') {
      try {
        const date = new Date(serial);
        if (!isNaN(date.getTime())) {
          return date;
        }
      } catch (e) {}
      return null;
    }
    const date = new Date(Date.UTC(0, 0, serial - 1));
    return date;
  };

  const formatDateToYYYYMMDD = (dateObject) => {
    if (!dateObject) return null;
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const generarSubparcelas = (conglomeradosList) => {
    const desplazamiento = 80;
    const subparcelasGeneradas = [];

    conglomeradosList.forEach((cong) => {
      const { id, latitud, longitud } = cong;
      const lat = parseFloat(latitud);
      const lon = parseFloat(longitud);

      if (isNaN(lat) || isNaN(lon) || id === undefined || id === null) {
        console.warn(`Skipping subparcela generation for conglomerado (ID: ${id}, Lat: ${latitud}, Lon: ${longitud})`);
        return;
      }

      for (let i = 1; i <= 5; i++) {
        let nuevaLat = lat;
        let nuevaLon = lon;

        if (i === 2) nuevaLon += desplazamiento;
        else if (i === 3) nuevaLat += desplazamiento;
        else if (i === 4) nuevaLon -= desplazamiento;
        else if (i === 5) nuevaLat -= desplazamiento;

        subparcelasGeneradas.push({
          latitud: nuevaLat.toFixed(6),
          longitud: nuevaLon.toFixed(6),
          numero: i,
          idconglomerado: id
        });
      }
    });

    return subparcelasGeneradas;
  };

  const enviarDatos = async () => {
    setIsLoading(true);
    setMessage(null);
    try {
      const responseConglo = await fetch("https://back-end-inventarionacional.onrender.com/api/conglomerado/agregar-conglomerado", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(conglomerados)
      });

      const dataConglo = await responseConglo.json();

      if (!responseConglo.ok) {
        if (responseConglo.status === 207 && dataConglo.errores) {
          console.error("Errores parciales al insertar conglomerados:", dataConglo.errores);
          setMessage({ type: 'error', text: "Algunos conglomerados no se pudieron insertar. Revisa la consola." });
          throw new Error("Proceso abortado.");
        } else {
          setMessage({ type: 'error', text: dataConglo.mensaje || "Error al insertar conglomerados." });
          throw new Error(dataConglo.mensaje || "Error desconocido.");
        }
      }

      const conglomeradosConID = dataConglo.exitos.map((item) => {
        const originalConglomerado = conglomerados[item.index];
        if (!originalConglomerado) {
          console.warn(`Original conglomerado not found for index ${item.index}`);
          return null;
        }
        return {
          ...originalConglomerado,
          id: item.id
        };
      }).filter(Boolean);

      if (conglomeradosConID.length === 0 && dataConglo.exitos.length > 0) {
        setMessage({ type: 'error', text: "No se pudieron asociar los IDs de los conglomerados." });
        throw new Error("Fallo al asociar IDs.");
      }

      setConglomerados(conglomeradosConID);

      const subparcelasGeneradas = generarSubparcelas(conglomeradosConID);
      setSubparcelas(subparcelasGeneradas);

      const responseSub = await fetch("https://back-end-inventarionacional.onrender.com/api/conglomerado/agregar-subparcela", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(subparcelasGeneradas)
      });

      const dataSub = await responseSub.json();

      if (!responseSub.ok) {
        if (responseSub.status === 207 && dataSub.errores) {
          console.error("Errores al insertar subparcelas:", dataSub.errores);
          setMessage({ type: 'error', text: "Algunas subparcelas fallaron." });
          throw new Error("Error en subparcelas.");
        } else {
          setMessage({ type: 'error', text: dataSub.mensaje || "Error al insertar subparcelas." });
          throw new Error(dataSub.mensaje || "Error desconocido.");
        }
      }

      setMessage({ type: 'success', text: "¡Datos enviados correctamente!" });

    } catch (error) {
      console.error("Error al enviar datos:", error);
      if (!message || message.type !== 'error') {
        setMessage({ type: 'error', text: `Error al enviar datos: ${error.message}` });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleData = (jsonData) => {
    const processedData = jsonData.map(item => {
      const newItem = { ...item };

      if (newItem.fechainicial) {
        const jsDate = excelSerialDateToJSDate(newItem.fechainicial);
        newItem.fechainicial = formatDateToYYYYMMDD(jsDate);
      }
      if (newItem.fechafinal) {
        const jsDate = excelSerialDateToJSDate(newItem.fechafinal);
        newItem.fechafinal = formatDateToYYYYMMDD(jsDate);
      }

      newItem.idcoinvestigador = userDocRef;

      return newItem;
    });

    setConglomerados(processedData);
    setSubparcelas([]);
    if (processedData.length > 0) {
      const columnasGeneradas = Object.keys(processedData[0]).map((key) => ({
        name: key,
        selector: (row) => row[key],
        sortable: true,
      }));
      setColumns(columnasGeneradas);
    } else {
      setColumns([]);
    }
    setMostrarSubparcelas(false);
    setMessage(null);
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



    {isLoading && <p>Cargando datos...</p>}
    {message && (
      <p style={{ color: message.type === 'error' ? 'red' : 'green', fontWeight: 'bold' }}>
        {message.text}
      </p>
    )}

    {datosAMostrar.length > 0 && columns.length > 0 && (
      <>
        <Tabla columns={columns} data={datosAMostrar} />

        <div style={{ marginTop: '20px' }}>
          <button
            onClick={enviarDatos}
            disabled={isLoading}
            className="boton-azul"
          >
            {isLoading ? "Enviando..." : "Enviar Datos al Servidor"}
          </button>
        </div>
      </>
    )}
  </div>
);

}

export default CargarConglomerado;
