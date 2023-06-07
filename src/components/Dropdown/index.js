import './dropdown.css';

const Dropdown = (props) =>{

    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={
                    evento => {
                        props.aoAlterar(evento.target.value)
                    }
                } value={props.value}>
                {
                    props.items.map(item =>  {
                        return (
                            <option key={item} value={item}>{item}</option>
                        );
                    })
                }
            </select>
        </div>
    );
}

export default Dropdown;