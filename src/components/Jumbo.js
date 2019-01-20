import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Test Your Memory</h1>
        <p className="lead">In this game you'll start by clicking a photo, then try to click the rest without clicking a previously clicked image.</p>
        <hr className="my-2" />
        <p>Don't click the same picture twice!</p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;