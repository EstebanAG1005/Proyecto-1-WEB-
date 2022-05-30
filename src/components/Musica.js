import React, {useState} from 'react'
import Oveja from '../../public/Img/Oveja.jpg'
import './Musica.css'


const Musica = () => {
    
  


    return(
        <div>
            <h2 className='Music'>MUSIC</h2>
            <hr
            style={{
                background: 'black',
                color: 'black',
                borderColor: 'black',
                height: '1px',
                width: '47.1%',
                marginTop: '9%',
                left: '26.4%',
                position: 'absolute'
                
                
            }}/>

            <h2 className='View'><span></span></h2>
            <img className='Oveja2' src={Oveja} alt="Oveja" />;
            <h3 className='OvejaL'>FEATURED ALBUM</h3>
            <h4 className='LION2'>LION</h4>
            <img className='Lint' src={' https://www.datocms-assets.com/60663/1641411202-.jpeg?auto=format&fit=max&fm=webp'} alt="Lint" />;
            <h3 className='Album'>ALBUM</h3>
            <h4 className='OLD'>Old Church Basement</h4>
            <img className='Garden' src={'https://www.datocms-assets.com/60663/1643727856-giga_final_cover-1.jpeg?auto=format&fit=max&fm=webp'} alt="Garden"/>;
            <h3 className='Album2'>ALBUM</h3>
            <h4 className='Grave'>Graves Into Gardens</h4>
            <img className='Blue' src={'https://www.datocms-assets.com/60663/1641409717-t-idnight.jpeg?auto=format&fit=max&fm=webp'} alt="Blue"/>;
            <h3 className='Album3'>ALBUM</h3>
            <h4 className='At'>At Midnight</h4>
            <img className='Red' src={'https://www.datocms-assets.com/60663/1641406088-ew-hhbe_2-1.jpeg?auto=format&fit=max&fm=webp'} alt="Red"/>;
            <h3 className='Album4'>ALBUM</h3>
            <h4 className='Ha'>Hallelujah Here Below</h4>
            

            
           
            
        </div>
        
    )
}

export default Musica
