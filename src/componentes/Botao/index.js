import './Botao.css';

const Botao = (props) => {
  return (
    <button className="botao" onClick={props.acao}>
      {props.texto}
    </button>
  );
};
export default Botao;
