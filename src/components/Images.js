import React from 'react';
import {Row, Col, Card, Container} from 'reactstrap';

function Images (props) {
    const url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/';
    const imgArr = ['Aatrox', 'Ahri', 'Akali', 'Alistar', 'Ezreal', 'Sivir', 'Soraka', 'JarvanIV', 'Nasus', 'Jax', 'Leblanc', 'Kalista'];
    
    return(
        <Container>
            {props.Arr.map((item,index) => (
                    <img src={url+item+'.png'} id={index} alt={item+'-'+index} style= {{padding: ".5rem"}} onClick={props.Guess}></img>
            ))}

        </Container>
    )

};
export default Images;