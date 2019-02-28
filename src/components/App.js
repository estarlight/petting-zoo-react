import React, { Component } from 'react';
import Animal from './Animal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  render() {
    return (
      <div>
        <h1>Petting Zoo!</h1>
        <h3> {this.state.message}</h3>
        <Animal name = "Horse" onPetAnimal={(name) => this.setState({message: `You just pet the ${name}!`}) } />
        <Animal name = "Goat" />
        <Animal name = "Sheep" />
      </div>
    );
  }
}

export default App;
