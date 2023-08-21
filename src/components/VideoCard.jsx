import '../css/estilos.css'
import { Link } from 'react-router-dom'
import { datos } from '../data/archivos_iniciales'

const VideoCards = ({ url, color, nombreCategoria }) => {

    let colorCard = {
        border: `2px solid ${color}`, 
        backgroundColor: `${color}`
    }
    return (
        <>
            {
                datos.videos.map(video => {
                    const { id, urlVideo, urlImagen, categoria } = video
                    if(categoria === nombreCategoria){
                        return (
                        <Link to={`${urlVideo}`} target="_blank" rel="noopener noreferrer" key={id}>
                            <div className='videocard' style={ colorCard } key={id}>
                                <img src={`${urlImagen}`} alt="Imagen video card" key={id}/>
                            </div>
                        </Link>
                        );
                    }   
                })
            }
        </>
        
    )
}

export default VideoCards