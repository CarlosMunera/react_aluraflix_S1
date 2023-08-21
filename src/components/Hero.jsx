import { Link } from 'react-router-dom'
import '../css/estilos.css'
import Player from '../img/player.png'

const Hero = ()=>{
    return (
        <section className='hero'>
            <div className='hero__contenido container'>
                <div className='hero__texto'>
                    <div className='hero__categoria'>Front End</div>
                    <h2 className='hero__titulo'>Challenge React</h2>
                    <p className='hero__descripcion'>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
                <Link to='https://www.youtube.com/watch?v=ov7vA5HFe6w&t' target='_blank' rel="noopener noreferrer">
                    <div className='hero__player' >
                        <img src={ Player } alt="Imagen Player" />
                    </div>
                </Link>
                
            </div>
        </section>
    )
}

export default Hero