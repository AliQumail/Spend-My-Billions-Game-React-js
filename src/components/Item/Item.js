import React from 'react';
import {Container,Row,Button} from 'react-bootstrap';
import './Item.css';

function Item(props){
    return <Container className='item-outer-div'>
         <Row>
             <img className='item-image' src={props.image} alt='Not supported' height='175px' width='100%'/>
         </Row>
         <Row className='item-name'>{props.name}</Row>
         <Row className='item-price'>$ {props.price}</Row>
         <Row className='item-button'><Button variant='warning' size='sm'
         onClick={() => props.handleCalculation(props.name) }>Add</Button></Row>
    </Container>
}

export default Item;