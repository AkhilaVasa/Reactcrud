import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Userlist from './pages/Userlist';
import Createuser from './pages/Createuser';
import Edituser from './pages/Edituser';
import Update from './pages/Updatepage';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Userlist} />
          <Route path='/create' component={Createuser} />
          <Route path='/edit' component={Edituser} />
          <Route path='/update' component={Update} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
