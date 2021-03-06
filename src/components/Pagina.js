import React from 'react';
import Video from '../../public/Videos/Leon.mp4';
import Oveja from '../../public/Img/Oveja.jpg';
import './Pagina.css';

function Pagina() {
  return (
    <div>
      <h1 className="LION">LION</h1>
      <img className="OvejaMain" src={Oveja} alt="Oveja" />
      ;

      <video autoPlay loop muted className="VideoFondo">
        <source src={Video} type="video/mp4" />
      </video>

      <button className="ListenNow" type="button">Listen Now</button>

    </div>
  );
}

export default Pagina;
