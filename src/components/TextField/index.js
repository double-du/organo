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
    return(
        <div className="text_field">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    );
}

export default TextField;