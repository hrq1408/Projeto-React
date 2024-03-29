import './CampoTexto.css';
const CampoTexto = (props) => {
  //let valor = '';

  //const [valor, setValor] = useState('Henrique');

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};
export default CampoTexto;
