import { datos } from '../data/archivos_iniciales'

const ListaOpciones = ({titulo, required, error, valor, actualizarValor}) => {
    
    const manejarCambio = (e) => {
        actualizarValor(e.target.value)
    }
    
    return (
        <div className="form__input ">
            <div className="form__input inputbackground">
                <label className='form__label' htmlFor="categoria">{titulo}</label>
                <select name="categoria" id="categoria" required={required} value={valor} onChange={manejarCambio}>
                    <option value="" disabled defaultValue='' hidden>** Escoja una categoria **</option>
                    {
                        datos.categorias.map((categoria, i) => {
                            return(
                                <option value={categoria.nombre} key={i}>{categoria.nombre}</option>
                            )
                        })
                    }
                </select>
            </div>
            <span className="form__mensaje">{error}</span>
        </div>
    )
}

export default ListaOpciones