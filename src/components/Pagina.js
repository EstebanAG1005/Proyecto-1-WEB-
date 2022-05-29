import React from 'react'
import Video from '../../public/Videos/Leon.mp4'
import Oveja from '../../public/Img/Oveja.jpg'
import './Pagina.css'

const Pagina = () => {

    return(
        <div>
            <img className='OvejaMain' src={Oveja} alt="Oveja" />;

            <video autoPlay loop muted className='VideoFondo'>
                    <source src={Video} type="video/mp4"/>
            </video>

            <button class="px-4 py-2 font-bold text-white border border-white rounded-none hover:bg-white hover:text-black">Listen Now</button>
            
        </div>
        
    )
}

export default Pagina

