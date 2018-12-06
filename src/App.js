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
    clicked: [],
    score: 0
  }

  handleClick = (event) => {
    this.setState({
      clicked: [...this.state.clicked, event.target.alt]
    })
    if (this.state.clicked.includes(event.target.alt)) {
      console.log("you lose")
    } else {
      this.setState({
        score: this.state.score + 1
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          score={this.state.score}
        />
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
