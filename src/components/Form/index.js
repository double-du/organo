import TextField from '../TextField';
import './Form.css';

const Form = () => {
    return (
        <section className='form_section'>
            <form>
                <h2>Preencha os dados pra criar o card do colaborador</h2>
                <TextField label='Nome' placeholder='Digite seu nome'/>
                <TextField label='Cargo'  placeholder='Digite seu cargo'/>
                <TextField label='Imagem' placeholder='Selecione sua imagem'/>
            </form>
        </section>
    )
}

export default Form;