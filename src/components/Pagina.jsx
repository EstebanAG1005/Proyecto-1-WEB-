import React from 'react'
import Video from '../../public/Videos/Leon.mp4'
import Oveja from '../../public/Img/Oveja.jpg'

const Pagina = () => {

    return(
        <div>
            <video autoPlay loop muted className='VideoFondo'>
                    <source src={Video} type="video/mp4"/>
                </video>
            <div>
                <img src={Oveja} alt="Oveja" />;
            </div>
            <div>
                
            </div>
        </div>
        
    )
}

export {Pagina}

