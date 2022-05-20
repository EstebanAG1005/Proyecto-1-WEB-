import React from 'react';
import { createRoot } from 'react-dom/client';
import Pagina from './components/Pagina.jsx';

const App = () => {
    return(        
        <Pagina title="Pagina"/>                     
    )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);