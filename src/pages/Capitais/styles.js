import styled from 'styled-components';

export const SectionGame = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  header {
    margin-bottom: 30px;
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
`;

export const ListAnswereds = styled.div`
  
  margin-top: 20px;
  display: flex;
  justify-content: center;

  ul li {
    margin-top: 10px;
    list-style: none;
    text-align: center;
  }
`;