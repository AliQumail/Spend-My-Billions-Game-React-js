import './App.css';
import Home from './components/Home';
import Play from './components/Play';
import {Container} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { useState } from 'react';


function App() {
  document.body.style.backgroundColor = "#F1948A";
  const [money,setMoney] = useState(0);
  
 
  
  return (
    <Router>
      <Container>
        <div className='centerMe'><h1 className='title'>Spend My <span className='red'>Billions</span></h1></div>
       <Route exact path='/'> 
          <Home money={money} setMoney={setMoney}/>
       </Route>
       <Route exact path='/play'>
         <Play  money={money} setMoney={setMoney} />
       
       </Route>
       </Container>
   </Router>
  );
}

export default App;
