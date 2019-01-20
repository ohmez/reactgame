import React from 'react';
import {Row, Col, Card, Container} from 'reactstrap';

function Images (props) {
    const url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/';
    const imgArr = props.Arr.map((item,index) => (
        <img src={url+item+'.png'} id={item} alt={item+'-'+index} style= {{padding: ".5rem"}} onClick={props.Guess}></img>
))
    const row1 = imgArr.slice(0,4);
    const row2 = imgArr.slice(4,8);
    const row3 = imgArr.slice(8,12);
    return(
        <Container>
            <Row>
                {row1}
            </Row>
            <Row>
                {row2}
            </Row>
            <Row>
                {row3}
            </Row>
        </Container>
    )

};
export default Images;