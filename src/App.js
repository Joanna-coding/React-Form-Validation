import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import './App.css';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
            <div className="App__Aside"></div>
            <div className="App__Form">
                <div className="PageSwitcher">
             
                    <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="PageSwitcher__Item ">Sign Up</NavLink>
                </div>

                <div className="FormTitle">
                  
                    <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link ">Sign Up</NavLink>
                </div>

                <Route exact path='/' component={SignUpForm}>
                  
                </Route>


                

            </div>
        </div>
      </Router>
    );
  }
}

export default App;

