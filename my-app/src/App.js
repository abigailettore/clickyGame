import React, {Component} from 'react';
import './App.css';
import Cards from './components/Cards/cards';
// import NavBar from './components/NavBar/navbar';
// import Footer from './components/Footer/footer';
import Grid from './components/Grid/grid';
// import ImageContainer from './components/ImageContainer/imagecontainer';
import playingCards from './playingCards.json';
import NavBar from './components/NavBar/navbar';

  let cardsClicked=[];
  let message="Click a cereal box to start";
  let score=0;
  let highscore=0;

class App extends Component {
  
  state = {
    playingCards,
    cardsClicked,
    message,
    score,
    highscore
  };

  shuffle = array => {
    for(let i = array.length -1; i> 0; i--){
      let j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[i], array[j]];
    }
    return array;
  }
  handleClick = id => {
    if(cardsClicked.includes(id)){
      score=0;
      message ="Game over!";
      cardsClicked=[];
    }else{
      cardsClicked.push(id);
      score += 1;
      message = "Correct!"
      if(score> highscore){
        highscore=score;
        message= "New highscore!"
      }
    }
    this.shuffle(playingCards);
    this.setState({playingCards, score, highscore, message});
  };

  render() {

    return (
      <div className="App">
      <imageContainer>
      <NavBar score={score} highscore={highscore} message={message}></NavBar>
      <Grid>
      {this.state.playingCards.map(playingCards => (
        <Cards
          id={playingCards.id}
          name={playingCards.name}
          image={playingCards.image}
          handleClick={this.handleClick}
        /> 
      ))}
      </Grid>
      </imageContainer>
      </div>
    )
  }
}

export default App;
