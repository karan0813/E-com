import React, { useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import Poster from './Poster';
import CardContainer from './CardContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signin from './Signin';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { Adduser } from './features/counter/userslice';

function App() {
  const dispetch = useDispatch()
 


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
         const username = authUser.email;
        dispetch(Adduser({
           username,
        }))

      } else {
        dispetch(Adduser({
          username:null
        }))

      }
     })
  }, [dispetch])
  return (
    <Router>
      <Switch>
        <Route path="/home" exact>
            <div className=" app w-full" >
              <Nav />
              <Poster />
              <CardContainer/>
            </div>
        </Route>
        <Route path="/" exact>
         
             <Signin/>
           
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
