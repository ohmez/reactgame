import React from 'react';
import { Badge } from 'reactstrap';

function Scoreboard (props) {
      return (
        <div style={{display: "inline-flex"}} id="scoreboard">
          <h1>Score: <Badge color="secondary">{props.score}</Badge></h1>
          <h2 style={{"margin": "0.4rem 0 0 1rem"}}>Goal: <Badge color="secondary">{props.total}</Badge></h2>
          
        </div>
      );
    }
export default Scoreboard;
