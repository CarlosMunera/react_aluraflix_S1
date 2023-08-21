import ButtonForm from '../components/ButtonForm'
import '../css/estilos.css'

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
                        
                        <div className="form__input ">
                            <div className="form__input inputbackground">
                                <label className='form__label' htmlFor="">Nombre</label>
                                <input type="text" id='nombre' />
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
                                <label className='form__label' htmlFor="">Color</label>
                                <input type="color" id='nombre' />
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


                        <div className="botones">
                            <ButtonForm styles={EstilosBtnGuardar} >Guardar</ButtonForm>
                            <ButtonForm styles={EstilosBtnLimpiar} >Limpiar</ButtonForm>
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
                            <tr>
                                <td>Front End</td>
                                <td>Formación Front End de Alura Latam</td>
                                <td className="table__editar">Editar</td>
                                <td  className="table__remover">Remover</td>
                            </tr>
                            <tr>
                                <td>Back End</td>
                                <td>Formación Back End de Alura Latam</td>
                                <td className="table__editar">Editar</td>
                                <td  className="table__remover">Remover</td>
                            </tr>
                            <tr>
                                <td>Innovación y Gestión</td>
                                <td>Formación Innovación y Gestión de Alura Latam</td>
                                <td className="table__editar">Editar</td>
                                <td  className="table__remover">Remover</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </main>
        </>
        
        
        
    )
    
}

export default NuevaCategoria