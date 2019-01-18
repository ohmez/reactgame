import React from 'react';
import { Badge } from 'reactstrap';

function Scoreboard (props) {
      return (
        <div>
          <h1>Score: <Badge color="secondary">{props.score}</Badge></h1>
          <h2>Goal: <Badge color="secondary">{props.total}</Badge></h2>
          
        </div>
      );
    }
export default Scoreboard;
