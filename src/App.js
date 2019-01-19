import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Jumbo from './components/Jumbo';
import {Container, Row, Col} from 'reactstrap';
import Images from './components/Images';
import Scoreboard from './components/Scoreboard';

const imgArr = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Ezreal', 'Sivir', 'Soraka', 'JarvanIV', 'Nasus', 'Jax', 'Leblanc', 'Kalista'];

class App extends Component {
  state = {
    score: 0,
    total: 12,

  };
  restart = event => {
    console.log('restart ran');
    const OGstate = {
      score: 0,
      total: 12,
    }
    this.setState(OGstate);
  };
  Guess = event => {
    const newState = { ...this.state }
    console.log(newState);
    const clikID = event.target.id;
    const classes = event.target.attributes.class;
    if(!classes) {
      newState.score = (this.state.score +1); event.target.attributes.class = 'clicked';
      this.setState(newState);
    } else {
      window.location ="/";
    }
  };
  fishy (a) {
    var m = a.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = a[m];
      a[m] = a[i];
      a[i] = t;
    }
  return a;
  }

  render() {
    return (
      <Container fluid>
        <NavBar />
        <Jumbo fluid onClick={this.Guess}/>
        <br></br>
        <Scoreboard score={this.state.score} total={this.state.total} />
        <br></br>
        <Images Arr={this.fishy(imgArr)} Guess={this.Guess}></Images>
      </Container>
    );
  }
}

export default App;
