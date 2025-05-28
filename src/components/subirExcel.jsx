import { useState } from 'react';
import * as XLSX from 'xlsx';
import '../styles/Excel.css';

const UploadExcel = ({ expectedHeaders = [], onData, buttonClass }) => {
    const [, setData] = useState([]);
    const [error, setError] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            if (jsonData.length === 0) {
                setError('El archivo está vacío.');
                setData([]);
                onData?.([]);
                return;
            }

            const headers = Object.keys(jsonData[0]);
            const headersValidos = expectedHeaders.every((h) =>
                headers.includes(h)
            );

            if (!headersValidos) {
                setError('El archivo no tiene el formato esperado.');
                setData([]);
                onData?.([]);
                return;
            }

            setError(null);
            setData(jsonData);
            onData?.(jsonData);
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div style={{ padding: '20px' }}>
            <label htmlFor="file-upload" className={`custom-upload ${buttonClass}`}>
                Subir Excel
            </label>
            <input
                id="file-upload"
                accept=".xlsx, .xls"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default UploadExcel;
