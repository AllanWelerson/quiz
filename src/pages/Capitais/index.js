import React, {useState} from 'react';

import { ListAnswereds, SectionGame } from './styles';

export default function Capitais() {

  const capitalsList = [
    {state: "Distrito Federal", name: "Brasilia", answered: true },
    {state: "Acre", name: "Rio Branco", answered: true },
    {state: "Alagoas", name: "Maceió", answered: false },
    {state: "Amapá", name: "Macapá", answered: false },
    {state: "Amazonas", name: "Manaus", answered: false },
    {state: "Bahia", name: "Salvador", answered: false },
    {state: "Ceará", name: "Fortaleza", answered: false },
    {state: "Espírito Santo", name: "Vitória", answered: false },
    {state: "Goiás", name: "Goiânia", answered: false },
    {state: "Maranhão", name: "São Luís", answered: false },
    {state: "Mato Grosso", name: "Cuiabá", answered: false },
    {state: "Mato Grosso do Sul", name: "Campo Grande", answered: false },
    {state: "Minas Gerais", name: "Belo Horizonte", answered: false },
    {state: "Pará", name: "Belém", answered: false },
    {state: "Paraíba", name: "João Pessoa", answered: false },
    {state: "Paraná", name: "Curitiba", answered: false },
    {state: "Pernambuco", name: "Recife", answered: false },
    {state: "Piauí", name: "Teresina", answered: false },
    {state: "Rio de Janeiro", name: "Rio de Janeiro", answered: false },
    {state: "Rio Grande do Norte", name: "Natal", answered: false },
    {state: "Rio Grande do Sul", name: "Porto Alegre", answered: false },
    {state: "Rondônia", name: "Porto Velho", answered: false },
    {state: "Roraima", name: "Boa Vista", answered: false },
    {state: "Santa Catarina", name: "Florianópolis", answered: false },
    {state: "São Paulo", name: "São Paulo", answered: false },
    {state: "Sergipe", name: "Aracaju", answered: false },
    {state: "Tocantins", name: "Palmas", answered: false },  
  ];

  const config = {state: 0,answered: 0};

  const [text, setText] = useState("");
  const [capitals, setCapitals] = useState(capitalsList);
  // const [config, setConfig] = useState({state: 0,answered: 1}); 
  

  const handleResultText = value => {
    setText(value);
    const capitalResult = capitals.map(capital => {
      if(capital.name.toLowerCase() === value.toLowerCase()){
        config.answered++;
        capital.answered = true;
        setText(""); 
      }

      return capital;
    });

    setCapitals(capitalResult);
  }

  return (
    <>
        <SectionGame>
            <header>
                <h1>Você consegue acertar o nome de todas as capitais do Brasil em 4 minutos?</h1>
            </header>

            <input type="text" value={text} onChange={e => handleResultText(e.target.value)}/>
            <ListAnswereds>
              <ul>
                {capitals.map(capital =>  capital.answered ? <li key={capital.name}>{ capital.name}</li> : '') }
              </ul>
            </ListAnswereds>
        </SectionGame>
    </>
  );
}
