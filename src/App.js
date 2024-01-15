import React, { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#82cffa',
      corSegundaria: '#d9f7e9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSegundaria: '#e8f8ff',
    },
    {
      nome: 'Data Scrience',
      corPrimaria: '#a6d157',
      corSegundaria: '#f0f8e2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06869',
      corSegundaria: '#fde7e8',
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#db6ebf',
      corSegundaria: '#fae9f5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSegundaria: '#fff5d9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSegundaria: '#ffeedf',
    },
  ];
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdcionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdcionado(colaborador)
        }
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSegundaria={time.corSegundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome,
          )}
        />
      ))}
    </div>
  );
}

export default App;
