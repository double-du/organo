import Card from '../Card';
import './Time.css';

const Time = (props) => {
    return (
        (props.colaboradores.length > 0 ) ? <section className={`time ${props.classe}`}>
            <h3>{props.nome}</h3>
            <div className='cards'>
                {props.colaboradores.map(
                    colaborador => 
                        <Card 
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            time={colaborador.time}
                        />
                )}
            </div>
        </section>
        : ''
    );
}

export default Time;