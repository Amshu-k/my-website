import React from 'react';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={Projects}/>
    </React.Fragment>
  );
}

export default App;
