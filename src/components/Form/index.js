// Componentes

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

    return (
        <section className='form_section'>
            <form>
                <h2>Preencha os dados pra criar o card do colaborador</h2>
                <TextField  label='Nome' placeholder='Digite seu nome'/>
                <TextField  label='Cargo'  placeholder='Digite seu cargo'/>
                <TextField  label='Imagem' placeholder='Selecione sua imagem'/>
                <Dropdown   label='Time' items={times} />
            </form>
        </section>
    )
}

export default Form;