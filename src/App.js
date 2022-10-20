import React from 'react';

import { Background } from './Components/';
import Header from './Pages/Header'
import Main from './Pages/Main'
import './style/app.scss'

function App() {

  return (
    <div className='wrapper'>
      <Background />
      <div className='weather weather__container'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
