import React, {Component} from 'react';
import './App.css';
import Card from './Components/Card/Card';
import BaseParticles from './Particles/BaseParticles';

class App extends Component{
  render(){
    return(
      <div>
        <BaseParticles />
        <Card/>
      </div>
    )
  }
}

export default App;