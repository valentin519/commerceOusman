import React from 'react';
import logo from './logo.svg';
import './App.css';
import Acceuil from './component/Acceuil';
import Mainpage from './component/Mainpage';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Acceuil}/>
      < Route path='/mainpage' component={Mainpage}/>
      </Switch>
    </div>
  );
}

export default App;
