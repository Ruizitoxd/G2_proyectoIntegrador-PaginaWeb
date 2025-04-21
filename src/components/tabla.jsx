import React from 'react';
import DataTable from 'react-data-table-component';
import '../styles/Tabla.css'; // importa tus estilos
const customStyles = {
    headRow: {
        style: {
            backgroundColor: '#0097b2', // Fondo del encabezado
            color: 'white', // Color del texto
            borderRadius: '12px',
        },
    },
    headCells: {
        style: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
};
/**
 * @param {{columns: Array, data: Array }} props
 */
export default function Tabla({ columns, data }) {
    return (
        <div className="table-card">
            <div className="data-table-wrapper">
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    customStyles={customStyles}
                />
            </div>
        </div>
    );
}
