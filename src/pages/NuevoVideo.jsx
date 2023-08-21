import ButtonLink from "../components/ButtonLink"
import ButtonForm from "../components/ButtonForm"
import CampoTexto from "../components/CampoTexto"
import ListaOpciones from "../components/ListaOpciones"

const NuevoVideo = () =>{

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log('Manejar el envio',e)
    }

    const EstilosBtnNuevaCategoria = {
        color: '#ffffff',
        background: '#2A7AE4',
        fontSize: '21px',
        fontWeight: '600',
        width: '254px',
        height: '54px',
        borderRadius: '4px',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

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
                    <h2 className="nuevovideo__titulo">Nuevo Video</h2>
                    
                    <form className='form' action="" onSubmit={manejarEnvio}>
                        
                        <CampoTexto titulo='Título' mensaje="" required/>
                        
                        <CampoTexto titulo='Link del video' mensaje="" required/>

                        <CampoTexto titulo='Link de la imagen del video' mensaje="" required/>
                        
                        <CampoTexto titulo='Link de la imagen del video' mensaje="" required/>

                        <ListaOpciones titulo='Categoría' mensaje="" required/>

                        

                        <div className="form__input ">
                            <div className="form__input inputbackground">
                                <label className='form__label' htmlFor="descripcion" >Descripción</label>
                                <textarea name="descripcion" id="descripcion" cols="30" rows="4"></textarea>
                            </div>
                            <span className="form__mensaje">Campo obligatorio</span>
                        </div>

                        <CampoTexto titulo='Código de seguridad' mensaje="" required/>

                        <div className="barra__botones">
                            <div className="botones">
                                <ButtonForm titulo='Guardar' styles={EstilosBtnGuardar} />
                                <ButtonForm titulo='Limpiar' styles={EstilosBtnLimpiar} />
                            </div>
                            <ButtonLink to='/nuevacategoria' titulo='Nueva Categoría' styles={EstilosBtnNuevaCategoria}/>
                        </div>

                    </form>

                </div>
            </main>
        </>
        
        
        
    )
    
}

export default NuevoVideo