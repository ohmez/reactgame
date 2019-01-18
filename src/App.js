import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Jumbo from './components/Jumbo';
import {Container, Row, Col} from 'reactstrap';
import Images from './components/Images';


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

  render() {
    return (
      <Container fluid>
        <NavBar />
        <Jumbo fluid onClick={this.Guess}/>
        <br></br>
        <div onClick={this.Guess}>
          <span>{this.state.score}</span>
        </div>
        
        <Images Guess={this.Guess}></Images>
        {/* <Row>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png"} alt={"One"} id="1"></img>
          </Col>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Ahri.png"} alt={"Two"} id="2"></img>
          </Col>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Alistar.png"} alt={"Three"} id="3"></img>
          </Col>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Nasus.png"} alt={"Four"} id="4"></img>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Sivir.png"} alt={"Five"} id="5"></img>
          </Col>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Ezreal.png"} alt={"Six"} id="6"></img>
          </Col>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Jax.png"} alt={"Seven"} id="7"></img>
          </Col>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Leblanc.png"} alt={"Eight"} id="8"></img>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/JarvanIV.png"} alt={"Nine"} id="9"></img>
          </Col>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Soraka.png"} alt={"Ten"} id="10"></img>
          </Col>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Kalista.png"} alt={"Eleven"} id="11"></img>
          </Col>
          <Col>
            <img src={"http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Akali.png"} alt={"Twelve"} id="12"></img>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default App;
