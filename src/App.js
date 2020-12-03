import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

const SSSRPage = () => (
  <div>
    <h1>SSSR PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/sssr' component={SSSRPage}/>
      </Switch>
    </div>
  );
}

export default App;
