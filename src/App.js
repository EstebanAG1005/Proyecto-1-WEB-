import React from 'react';
import Navbar from './components/navbar.js';
import Pagina from './components/Pagina.js';
import Musica from './components/Musica.js'
import News from './components/News.js';

export default function App() {
  return (
    <>

      <Navbar />
      <Pagina/>
      <Musica/>
      <News/>
    </>
  );
}