import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = document.getElementById('root');

if (root === null) {
    throw new Error("No root element found");
} else {
    createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
