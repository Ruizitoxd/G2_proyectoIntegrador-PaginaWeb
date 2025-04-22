import React from 'react';

export default function ColumnFilterSelect({
    columnKey,
    data,
    value,
    onChange,
}) {
    // Generamos las opciones únicas para el filtro
    const uniqueOptions = [
        'Todos',
        ...Array.from(new Set(data.map((row) => row[columnKey]))), // Filtra las opciones únicas
    ];

    return (
        <select
            onChange={(e) => onChange(columnKey, e.target.value)}
            value={value || 'Todos'} // Si no hay valor seleccionado, mostramos "Todos"
            style={{ width: '100%', marginTop: '4px' }}
        >
            {uniqueOptions.map((opt) => (
                <option key={opt} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
    );
}
