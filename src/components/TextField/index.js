import './TextField.css';
/*
Produz o mesmo resultado que::

function Xpto(){
    return (
        <html></html>
    );
}
*/


const TextField = (props) =>{
    
    /*
    Cria um objeto com valor e um Setter (acessor), dessa forma temos o ciclo reativo
    
    const [value, setValue] = useState('');
    
    useState é um Hook, isso significa que ele fica observando o conteúdo preenchido
    >> https://www.alura.com.br/artigos/react-hooks#:~:text=O%20useState%20%2C%20que%20permite%20a,para%20receber%20partes%20desse%20retorno.
    */
    const aoDigitar = (evt) => {
        props.onChange(evt.target.value);
    }

    return(
        <div className="text_field">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitar} placeholder={props.placeholder} required={props.required}/>
        </div>
    );
}

export default TextField;