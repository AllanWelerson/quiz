import styled from 'styled-components';

export const SectionGame = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  header {
    font-family: 'Pontano Sans', sans-serif;
    margin-bottom: 30px;
    padding: 20px;
    text-align: center;
    color: #808e9b;
    border-bottom: 1px solid  #808e9b;
    
    h1 {
      font-size: 30px;
      font-weight: bolder;
    }

    p {
      padding: 20px;
      font-size: 20px;
    }
    
  }

  .inputText {
    border-radius: 12px 10px;
    border: 1px solid #808e9b;
    width:400px;
    height: 40px;
    padding: 10px;
    margin-top: 20px;
    text-align: center;
  }
`;

export const MensagemFinal = styled.div`
  margin-top: 20px;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #808e9b;
  color: white;
  background-color: #808e9b;
`;

export const ListAnswereds = styled.div`
  
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ul {
    font-family: 'Pontano Sans', sans-serif;
    margin: 10px;
    padding: 10px 20px;
    border: 1px solid #808e9b;
    border-radius: 10px;

    li {

    &:first-child{
      color : #05c46b !important;
      padding: 10px;
      border-bottom: 1px solid #808e9b;
    }

    margin-top: 13px;
    list-style: none;
    text-align: center;

    
      span.correct {
        font-weight: bold;
        color: #05c46b;
      }

      span.state {
        color: #808e9b;
      }
    } 
  }

`;