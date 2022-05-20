import React from 'react'
import Video from '../../public/Videos/Leon.mp4'

const Pagina = () => {

    return(
        <div>
            <h1>Prueba con React</h1>
            <video autoPlay loop muted className='VideoFondo'>
                <source src={Video} type="video/mp4"/>
            </video>
        </div>
    )
}

export {Pagina}

