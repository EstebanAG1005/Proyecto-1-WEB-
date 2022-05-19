import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Pagina from './components/Pagina.jsx';

const App = () => {
    return(        
        <Pagina title="Pagina"/>                     
    )
}

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);
root.render(<App tab="home"/>);