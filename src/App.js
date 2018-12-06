import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import CharcterCard from "./components/CharacterCard";
import characters from "./characters.json";

class App extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    console.log("test")
  }

  render() {
    return (
      <Wrapper>
        <NavBar />
        <Jumbotron />
        {characters.map(character => (
          <CharcterCard
            key={character.id}
            name={character.name}
            image={character.image}
            handleClick={this.handleClick}
          ></CharcterCard>
        ))}
      </Wrapper>
    );
  }
}

export default App;
