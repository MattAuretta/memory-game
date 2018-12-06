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
    score: 0,
    gameMessage: ""
  }

  //Set initial game message
  componentDidMount() {
    this.setState({
      gameMessage: "Click an image to begin!"
    })
  }

  handleClick = (event) => {
    this.setState({
      //Add the div's alt value to the clicked array
      clicked: [...this.state.clicked, event.target.alt]
    })
    //If the name is already in the clicked array set score back to 0 and empty clicked array
    if (this.state.clicked.includes(event.target.alt)) {
      this.setState({
        gameMessage: "You guessed incorrectly!",
        score: 0,
        clicked: []
      })
    } else {
      //If the name is not in the clicked array, add 1 to the current score
      this.setState({
        gameMessage: "You guessed correctly!",
        score: this.state.score + 1
      })
    }
    this.shuffleArray(characters);
  }

  shuffleArray(characters) {
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          gameMessage={this.state.gameMessage}
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
