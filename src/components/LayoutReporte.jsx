// Layout.jsx
import React from 'react';
import Sidebar from './SliderReportes';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                border: '1px solid #ddd',
                borderRadius: '12px',
                overflow: 'hidden',
            }}
        >
            {/* Sidebar fijo */}
            <div style={{ width: '250px', backgroundColor: '#f5f5f5' }}>
                <Sidebar />
            </div>

            {/* Contenido que cambia */}
            <div style={{ flex: 1, padding: '20px' }}>
                <Outlet />
            </div>
        </div>
    );
}
