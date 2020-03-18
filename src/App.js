import React from 'react';
import  GlobalStyles from './styles/global';
import { Main } from './styles/app';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main>
          <Routes />
        </Main>
      </Router>
     
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}

export default App;
