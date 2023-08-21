import { Link } from "react-router-dom"
import ButtonLink from "../components/ButtonLink"
import ButtonForm from "../components/ButtonForm"


const NuevoVideo = () =>{


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
                    <form className='form' action="">
                        
                        <div className="form__input ">
                            <div className="form__input inputbackground">
                                <label className='form__label' htmlFor="">Título</label>
                                <input type="text" id='nombre' />
                            </div>
                            <span className="form__mensaje">Campo obligatorio</span>
                        </div>

                        <div className="form__input ">
                            <div className="form__input inputbackground">
                                <label className='form__label' htmlFor="">Link del video</label>
                                <input type="text" />
                            </div>
                            <span className="form__mensaje">Campo obligatorio</span>
                        </div>

                        <div className="form__input ">
                            <div className="form__input inputbackground">
                                <label className='form__label' htmlFor="">Link de la imagen video</label>
                                <input type="text" />
                            </div>
                            <span className="form__mensaje">Campo obligatorio</span>
                        </div>

                        <div className="form__input ">
                            <div className="form__input inputbackground">
                                <label className='form__label' htmlFor="">Categoría</label>
                                <select name="" id="">
                                    <option value="">** Escoja una categoria **</option>
                                </select>
                            </div>
                            <span className="form__mensaje">Campo obligatorio</span>
                        </div>

                        <div className="form__input ">
                            <div className="form__input inputbackground">
                                <label className='form__label' htmlFor="" >Descripción</label>
                                <textarea name="" id="" cols="30" rows="4"></textarea>
                            </div>
                            <span className="form__mensaje">Campo obligatorio</span>
                        </div>

                        <div className="form__input ">
                            <div className="form__input inputbackground">
                                <label className='form__label' htmlFor="">Código de seguridad</label>
                                <input type="text" />
                            </div>
                            <span className="form__mensaje">Campo obligatorio</span>
                        </div>


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