// Componentes

import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';

// CSS >>

import './Form.css';

const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'UX e Design',
        'Mobile',
        'Inovação',
        'Gestão'
    ];

    const onSave = (event) => {
        event.preventDefault();
        console.log("Salvo!");
    }

    return (
        <section className='form_section'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados pra criar o card do colaborador</h2>
                <TextField  label='Nome'    placeholder='Digite seu nome'       required={true}/>
                <TextField  label='Cargo'   placeholder='Digite seu cargo'      required={true}/>
                <TextField  label='Imagem'  placeholder='Selecione sua imagem'  />
                <Dropdown   label='Time'    items={times} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;