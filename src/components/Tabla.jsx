import React from 'react';
import DataTable from 'react-data-table-component';
import '../styles/Tabla.css'; // importa tus estilos
const customStyles = {
    headRow: {
        style: {
            backgroundColor: '#0097b3', // Fondo del encabezado
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
        <div
            className="table-card"
            style={{
                overflowX: 'auto',
                overflowY: 'auto',
                maxHeight: '500px',
                width: '100%',
            }}
        >
            <div className="data-table-wrapper">
                <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[5, 10, 25, 50]}
                    customStyles={customStyles}
                />
            </div>
        </div>
    );
}