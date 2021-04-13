import React from 'react';
import {Container,Row,Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Home(props){
    
    const history = useHistory();
    const initValues = ['50 Millions','100 Millions','1 Billion','2 Billions','5 Billions','10 Billions',
'50 Billions','100 Billions','500 Billions'];
    
    let values =initValues;
  
    function handleSubmit(e){
        const {name} = e.target;
      
        if ( name ===  '50 Millions'){ 
            props.setMoney( 50000000 ) }
        if ( name === '100 Millions'){ 
            props.setMoney(100000000); }
        if ( name === '1 Billions'){
            props.setMoney(1000000000); }
        if ( name === '2 Billions'){
            props.setMoney(2000000000); }
        if ( name === '5 Billions'){
            props.setMoney(5000000000); }
        if ( name === '10 Billions'){
            props.setMoney(10000000000); }
        if ( name === '50 Billions'){
            props.setMoney(50000000000); }
        if ( name === '100 Billions'){
            props.setMoney(100000000000); }
        if ( name === '500 Billions'){
            props.setMoney(500000000000); }

     history.push('/play');


    }
  
   

  return  <Container className='justify-content-center'>
      <Row className='justify-content-center'>
      <div className="outer-div">
        <h4 className='prompt-intro'> Choose How much money do you want to have.</h4>
        
        {
            values.map( (value,i) => {
                return <Button key={i} className='money-btn btn-lg' variant='primary'  type='submit' onClick={handleSubmit} name={value}>{value}</Button>
            })
        }
   
    </div>
    </Row>
     </Container>
    

    
}

export default Home;