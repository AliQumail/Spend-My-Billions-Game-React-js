import React, { useState } from "react";
import {Container,Row,Col,Button} from "react-bootstrap";
import Item from './Item/Item'
import Data from '../Api/Data';
import './Play.css';
import { useHistory } from 'react-router-dom';


function Play(props){
    
    const history = useHistory();
    const [moneyLeft,setMoneyLeft] = useState(props.money);
    const [moneySpent,setMoneySpend] = useState(0);
    const [collections,setCollections]=useState([]);
    
    function handleCalculation(name){
        for (let i = 0 ; i < Data.length ; i++ ){
            if ( name === Data[i].name){
                if (moneyLeft<stringToInt(Data[i].price)) {
                    alert('Not Enough Money');
                } else {
                setMoneySpend(moneySpent + stringToInt(Data[i].price));
                setMoneyLeft(moneyLeft-stringToInt(Data[i].price));
                
                let found=0;
                for (let j =0 ; j<collections.length ; j++){
                    if ( collections[j].collectionName === Data[i].name  ){
                        collections[j].collectionQuantity+=1;
                        setCollections([...collections]);
                        found=1;
                    } 
                }
                if (found === 0){
                    const collection = {
                        collectionName: Data[i].name,
                        collectionPrice: Data[i].price,
                        collectionQuantity:1
                    }
                    let newCollections = [...collections];
                    newCollections.push(collection);
                    setCollections(newCollections);

                }
            }
            }
        }
    }
    function handleReturn(){
        history.push('/');
    }


    function stringToInt(n){
        let value='';
        for (let i=0; i<n.length ; i++){
           if (n[i] !== ','){
              value+=n[i];
           }
        }
         value = parseInt(value);
         return value;
      }
      
      
      
      function intToString(n){
        n = n.toString();
        let newstring='';
        let counter=-1;
        for (let i = (n.length-1) ; i>=0 ; i--){
          counter+=1;
          if (counter===3){
            newstring = newstring + ',' + n[i];
            counter=0;
          } else {
            newstring+=n[i];
          }
          
        }
         return newstring.split("").reverse().join("");
      }
 
    return <Container className='play-outer-div'>
        <Row className='stats-row'>
            <Col ><div className='money-spent'> Money Spent : ${intToString(moneySpent)}</div></Col>
            <Col ><div  className='money-left'> Money Left : ${intToString(moneyLeft)} </div></Col>
       </Row>
       <Row className='type-heading'>
            Cars
       </Row>
       <Row>
           {
               Data.map( (data,i) => {
                   if ( data.type==='cars' ){
                       return <Col lg={3} sm={6} md={4}><Item handleCalculation={handleCalculation} key={i} image={data.image} name={data.name} price={data.price} /></Col>
                   } else {
                    return null;
                }
               })
           }
       </Row>
       <Row className='type-heading'>
            Cryptocurrency 
       </Row>
       <Row>
           {
               Data.map( (data,i) => {
                   if ( data.type==='crypto' ){
                       return <Col lg={3} sm={6} md={4}><Item handleCalculation={handleCalculation} key={i} image={data.image} name={data.name} price={data.price}/></Col>
                    } else {
                        return null;
                    }
               })
           }
       </Row>
       <Row className='type-heading'>
            Real estate
       </Row>
       <Row className='mb-5'>
           { 
            Data.map( (data,i) => {
                   if ( data.type === 'real estate' ){
                       return <Col lg={3} sm={6} md={4}><Item handleCalculation={handleCalculation} key={i} image={data.image} name={data.name} price={data.price}/></Col>
                    } else {
                        return null;
                    }
               })
           }
       </Row>
       <Row className='type-heading'>
            Gadgets
       </Row>
       <Row className='mb-5'>
           {
               Data.map( (data,i) => {
                   if ( data.type==='Gadgets' ){
                       return <Col lg={3} sm={6} md={4}><Item handleCalculation={handleCalculation} key={i} image={data.image} name={data.name} price={data.price}/></Col>
                    } else {
                        return null;
                    }
               })
           }
       </Row>

      {collections.length!==0?  <Row className='type-heading'>Collections</Row>:null}
       <Row>
           {    collections.length!==0?
           <table>
            
               <tr>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Quanity</th>
              </tr>
              
             {
                collections.map( (collection,i) => {
                   return  <tr key={i}><th>{collection.collectionName}</th>
                   <th>{collection.collectionPrice}</th>
                   <th>{collection.collectionQuantity}</th></tr>
                    
                })
               
              }
           </table> :
           null
            }
       </Row>
       <Row className='return-div'>Return to Main Page : &nbsp; <Button className='return-button' onClick={handleReturn}>Click</Button></Row>
       
    </Container>;
}

export default Play; 