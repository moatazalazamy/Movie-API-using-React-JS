import React from 'react';
import './App.css';
import Retreive from './Retreive';
import Navbar from './Navbar'
import Footer from './Footer'
import Movie from './Movie'
import SignupClass from './SignUp'
import LoginClass from './Login'
import {Route,Switch, BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <>
  
        <Router>
          <Navbar />
          <Switch>
          <Route path={"/"} exact component={Retreive} />
            <Route path={"/movie"} exact component={Retreive} />
            <Route path={"/movie/:id"} exact component={Movie} />
            <Route path={"/signup"} exact component={SignupClass} />
            <Route path={"/login"} exact component={LoginClass} />
          </Switch>
          <Footer />
        </Router>
     
    </>
  );
}

export default App;
