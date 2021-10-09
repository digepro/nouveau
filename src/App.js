import './App.css';
import Accueil  from './Accueil'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/" component={Login}/>
  
            <Route path="/Accueil" component={Accueil}/>
          </Switch>
    </Router>
    
  );
}

export default App;
