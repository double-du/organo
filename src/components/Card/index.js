import './Card.css';

const Card = ({
    nome, cargo, imagem, time
}) => {
    return (
        <div className='card'>
            <figure>
                <div className='cabecalho'>
                    <img src='https://github.com/double-du.png' alt='foto'/>
                </div>
                <figcaption className='rodape'>
                    <h4>{nome}</h4>
                    <h5>{cargo} <br /> {time}</h5>
                </figcaption>
            </figure>
        </div>
    );
}

export default Card;