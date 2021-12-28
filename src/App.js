import React from 'react';
import './App.css';
import Welcome from './Components/Welcome/Welcome.js'
import Search from './Components/Search/Search.js';


function App() {
  return (
    <div className='body'>
      <div className='top'>
      <Welcome />
      </div>
      <div className='middle'></div>
      <div className='bottom'>
        <Search />
      </div>
    </div>
  );
}

export default App;
