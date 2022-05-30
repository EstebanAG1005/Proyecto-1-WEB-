import React from 'react';
import Pagina from './components/Pagina.js';
import Musica from './components/Musica.js';
import News from './components/News.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';

export default function App() {
  return (
    <>
      <Navbar />
      <Pagina />
      <Musica />
      <News />
      <Footer />
    </>
  );
}
