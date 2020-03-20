import React, {useState, useEffect} from 'react';

import { ListAnswereds, SectionGame, MensagemFinal } from './styles';

// import bandeira from './../../assets/bandeira.webp';

export default function Capitais() {

  const capitalsList = [
    {state: "Distrito Federal", name: "Brasília", answered: false, region: "centro-oeste" },
    {state: "Acre", name: "Rio Branco", answered: false, region: "norte"  },
    {state: "Alagoas", name: "Maceió", answered: false, region: "nordeste" },
    {state: "Amapá", name: "Macapá", answered: false, region: "norte" },
    {state: "Amazonas", name: "Manaus", answered: false, region: "norte" },
    {state: "Bahia", name: "Salvador", answered: false, region: "nordeste" },
    {state: "Ceará", name: "Fortaleza", answered: false, region: "nordeste" },
    {state: "Espírito Santo", name: "Vitória", answered: false, region: "sudeste" },
    {state: "Goiás", name: "Goiânia", answered: false, region: "centro-oeste"  },
    {state: "Maranhão", name: "São Luís", answered: false, region: "nordeste" },
    {state: "Mato Grosso", name: "Cuiabá", answered: false, region: "centro-oeste"  },
    {state: "Mato Grosso do Sul", name: "Campo Grande", answered: false, region: "centro-oeste"  },
    {state: "Minas Gerais", name: "Belo Horizonte", answered: false, region: "sudeste" },
    {state: "Pará", name: "Belém", answered: false, region: "norte" },
    {state: "Paraíba", name: "João Pessoa", answered: false, region: "nordeste" },
    {state: "Paraná", name: "Curitiba", answered: false, region: "sul" },
    {state: "Pernambuco", name: "Recife", answered: false, region: "nordeste" },
    {state: "Piauí", name: "Teresina", answered: false, region: "nordeste" },
    {state: "Rio de Janeiro", name: "Rio de Janeiro", answered: false, region: "sudeste"  },
    {state: "Rio Grande do Norte", name: "Natal", answered: false, region: "nordeste" },
    {state: "Rio Grande do Sul", name: "Porto Alegre", answered: false, region: "sul" },
    {state: "Rondônia", name: "Porto Velho", answered: false, region: "norte" },
    {state: "Roraima", name: "Boa Vista", answered: false, region: "norte" },
    {state: "Santa Catarina", name: "Florianópolis", answered: false, region: "sul" },
    {state: "São Paulo", name: "São Paulo", answered: false, region: "sudeste" },
    {state: "Sergipe", name: "Aracaju", answered: false, region: "nordeste"  },
    {state: "Tocantins", name: "Palmas", answered: false, region: "norte"  },  
  ];

  const initConfig = {state: 0,answered: 0};

  const [text, setText] = useState("");
  const [capitals, setCapitals] = useState(capitalsList);
  const [config, setConfig] = useState(initConfig); 
  const [seconds, setSeconds] = useState(0);

  const handleResultText = value => {
    
    if(config.state === 0){
      config.state = 1;
      setConfig(config);
    }

    setText(value);
    const capitalResult = capitals.map(capital => {
      if(capital.name.trim().toLowerCase() === value.trim().toLowerCase()){
        config.answered++;
        capital.answered = true;
        setText(""); 
      }

      return capital;
    });

    setCapitals(capitalResult);
  }



  useEffect(() => {  
    if(config.state === 1){
      if(seconds < 50){
        let interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
      }

      if(seconds === 50){
        config.state = 2;
        setConfig(config);
        setText("End Game");
      }
    }

  }, [config, config.state, seconds]);

  const handleSeconds = () => {
    const minutes = Math.floor(seconds / 60);
    const restOfSeconds = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' + minutes : minutes}:${restOfSeconds < 10 ? '0' + restOfSeconds : restOfSeconds }`;
  }

  return (
    <>
        <SectionGame>
            <header>
                <h1>Quiz das capitais</h1>
                <p>Você consegue acertar o nome de todas as capitais do Brasil em 4 minutos?</p>
                
            </header>
            <p>{handleSeconds()}</p>
            {config.state in [0, 1] 
                    ? <input  type="text" 
                              className="inputText"
                              disabled={(config.state === 2) ? 'disabled' : ''} 
                              value={text} 
                              onChange={e => handleResultText(e.target.value)}/> 
                    : <MensagemFinal>Fim de jogo, você acertou {config.answered}</MensagemFinal> }
            
            <ListAnswereds>
              <ul>
                <li>Centro-oeste</li>
                {capitals
                    .filter(capital => capital.region === 'centro-oeste')
                    .map(capital => <li key={capital.name}>{ capital.answered 
                                             ? <span className='correct'>{capital.name} {capital.state}</span>  
                                             : <span className='state'>{capital.state}</span>}</li>) }
              </ul>
              <ul>
                <li>Sudeste</li>
                {capitals
                    .filter(capital => capital.region === 'sudeste')
                    .map(capital => <li key={capital.name}>{ capital.answered 
                                             ? <span className='correct'>{capital.name} {capital.state}</span>  
                                             : <span className='state'>{capital.state}</span>}</li>) }
              </ul>
              <ul>
                <li>Sul</li>
                {capitals
                    .filter(capital => capital.region === 'sul')
                    .map(capital => <li key={capital.name}>{ capital.answered 
                                             ? <span className='correct'>{capital.name} {capital.state}</span>  
                                             : <span className='state'>{capital.state}</span>}</li>) }
              </ul>
              <ul>
                <li>Nordeste</li>
                {capitals
                    .filter(capital => capital.region === 'nordeste')
                    .map(capital => <li key={capital.name}>{ capital.answered 
                                             ? <span className='correct'>{capital.name} {capital.state}</span>  
                                             : <span className='state'>{capital.state}</span>}</li>) }
              </ul>
              <ul>
                <li>Norte</li>
                {capitals
                    .filter(capital => capital.region === 'norte')
                    .map(capital => <li key={capital.name}>{ capital.answered 
                                             ? <span className='correct'>{capital.name} {capital.state}</span>  
                                             : <span className='state'>{capital.state}</span>}</li>) }
              </ul>
            </ListAnswereds>
        </SectionGame>
    </>
  );
}
