import ButtonForm from '../components/ButtonForm'
import CampoTexto from '../components/CampoTexto'
import '../css/estilos.css'
import { datos } from '../data/archivos_iniciales'

const NuevaCategoria = () =>{

    const EstilosBtnGuardar = {
        display: 'inline-block',
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    const EstilosBtnLimpiar = {
        display: 'inline-block',
        color: '#000000',
        background: '#9E9E9E',
        fontSize: '21px',
        fontWeight: '600',
        width: '180px',
        height: '54px',
        borderRadius: '4px',
        border: 'none'
    }

    return (
        <>
            <main className="nuevovideo">
                <div className="container">
                    <h2 className="nuevovideo__titulo">Nueva Categoría</h2>
                    <form className='form' action="">
                        
                        <CampoTexto titulo='Nombre' error='' required/>

                        <CampoTexto titulo='Descripción' error='' required/>

                        <div className="form__input ">
                            <div className="form__input inputbackground">
                                <label className='form__label' htmlFor="" >Descripción</label>
                                <textarea name="" id="" cols="30" rows="4"></textarea>
                            </div>
                            <span className="form__mensaje">Campo obligatorio</span>
                        </div>

                        <CampoTexto titulo='Color' error='' required/>

                        <CampoTexto titulo='Código de seguridad' error='' required/>

                        <div className="botones">
                            <ButtonForm titulo='Guardar' styles={EstilosBtnGuardar} />
                            <ButtonForm titulo='Limpiar' styles={EstilosBtnLimpiar} />
                        </div>

                    </form>

                    <table>
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Descripción</td>
                                <td>Editar</td>
                                <td>Remover</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datos.categorias.map((categoria, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{categoria.nombre}</td>
                                            <td>{categoria.descripcion}</td>
                                            <td className="table__editar">Editar</td>
                                            <td className="table__remover">Remover</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </main>
        </>
        
        
        
    )
    
}

export default NuevaCategoria