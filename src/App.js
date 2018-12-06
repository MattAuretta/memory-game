import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import CharcterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar />
      {characters.map(character => (
        <CharcterCard
          name={character.name}
          image={character.image}
        ></CharcterCard>
      ))}
      </Wrapper>
    );
  }
}

export default App;
