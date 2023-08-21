import '../css/estilos.css'

const CampoTexto = ({titulo, required, error}) => {
   return (
        <div className="form__input ">
            <div className="form__input inputbackground">
            <label className='form__label' htmlFor="">{titulo}</label>
        <input type="text" id='titulo' required='required'/>
        </div>
            <span className="form__mensaje">{error}</span>
        </div>
   )
}

export default CampoTexto



