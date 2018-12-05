import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharcterCard from "./components/CharacterCard"
import characters from "./characters.json"

class App extends Component {
  render() {
    return (
      characters.map(character => (
        <CharcterCard
          name={character.name}
          image={character.image}
        ></CharcterCard>
      ))
    );
  }
}

export default App;
