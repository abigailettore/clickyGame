import React, {Component} from 'react';
import './App.css';
import Cards from './components/Cards/cards';
// import NavBar from './components/NavBar/navbar';
// import Footer from './components/Footer/footer';
import Grid from './components/Grid/grid';
// import ImageContainer from './components/ImageContainer/imagecontainer';
import playingCards from './playingCards.json';

class App extends Component {
  
  state = {
    playingCards,

  };

  render() {

    return (
      
      <Grid>
      {this.state.playingCards.map(playingCards => (
        <Cards
          id={playingCards.id}
          name={playingCards.name}
          image={playingCards.image}
          clickedCard={this.clickedCard}
        />
        
      ))}
      </Grid>
      
    )
  }
 

}

export default App;
