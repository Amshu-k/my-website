import React from 'react';
import { Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Route exact path='/' component={Home}/>
      <Route path='/resume' component={Resume}/>
      {/* <Route path='/' component={Home}/> */}
    </React.Fragment>
  );
}

export default App;
