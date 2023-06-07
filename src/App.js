import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {

  const [colaboradores,  setColaboradores] = useState([]);

  const cadastrarNovoColaborador = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  }

  const times = [
    {
      nome:'Programação',
      classe: 'time__programacao'
    },{
      nome: 'Front-End',
      classe: 'time__front'
    },{
      nome: 'Data Science',
      classe: 'time__data'
    },{
      nome: 'UX e Design',
      classe: 'time__ux'
    },{
      nome: 'Mobile',
      classe: 'time__mobile'
    },{
      nome: 'Inovação e Gestão',
      classe: 'time__inovacao'
    },{
      nome: 'Devops',
      classe: 'time__devops'
    }
  ]



  return (
    <div className="App">
      <Banner />
      <Form aoCadastrar={colaborador => cadastrarNovoColaborador(colaborador)} listaDeTimes={times.map(time => time.nome)} />
      {  
        times.map( time => 
            <Time 
              key={time.nome}
              nome={time.nome}  
              classe={time.classe}
              colaboradores={
                colaboradores.filter(
                  colaborador => colaborador.time === time.nome
                )
              }
            /> 
        )
      }
    </div>
  );
}

export default App;
