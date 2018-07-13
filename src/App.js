import React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import './App.css';
import login from './login.js';
import signin from './signin.js';
import api from'./api.js';

const Home=() => (
<div>
   <ul>
   </ul>
</div>
  );

 class App extends Component{

  render() {
    return (
       <div >
        <ul>
         
         <li><Link to="/login">Login</Link></li>
         <li><Link to="/signin">Signin</Link></li>
         <li><Link to="/api">Api</Link></li>
        </ul>
         
         <Route path="/login" component={login}/>
         <Route path="/signin" component={signin}/>
         <Route path="/api" component={api}/>


         
       </div>
    );
  }
}



export default App;
