// Componentes

import { useState } from 'react';
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

    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log("Salvo!");
        console.log(`Dados do Formulario:\nNome: ${nome}\nCargo: ${cargo}\nImagem: ${imagem}\nTime: ${time}`);
    }

    return (
        <section className='form_section'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados pra criar o card do colaborador</h2>
                <TextField  
                    label='Nome'    
                    placeholder='Digite seu nome'       
                    required={true}
                    onChange={value => setNome(value)}
                />
                <TextField  
                    label='Cargo'   
                    placeholder='Digite seu cargo'      
                    required={true}
                    onChange={value => setCargo(value)}
                />
                <TextField  
                    label='Imagem'  
                    placeholder='Selecione sua imagem' 
                    onChange={value => setImagem(value)}
                />
                <Dropdown   
                    label='Time'    
                    items={times}
                    value={time}
                    aoAlterar={ valor => setTime(valor)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;