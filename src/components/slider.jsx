import { Link } from "react-router-dom";

export default function Sidebar() {
  const boxStyle = {
    padding: "10px 15px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
    color: "#333",
    display: "block",
  };

  return (
    <div style={{ width: "220px", backgroundColor: "#f5f5f5", height: "100vh", padding: "20px" }}>
      <h3>Opciones</h3>
      <div>
        <Link to="/Excel/home" style={boxStyle}>Conglomerados</Link>
        <Link to="/Excel/home/suelo" style={boxStyle}>Suelos</Link>
        <Link to="/Excel/home/arboles" style={boxStyle}>Arboles</Link>
        <Link to="/Excel/home/coleccion" style={boxStyle}>Coleccion Botanica</Link>
      </div>
    </div>
  );
}
