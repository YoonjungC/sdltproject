import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Courses from "./Courses";
import FAQ from "./FAQ";
import Footer from "./Footer";

function App() {
  return (
    <Router>  
      <div className="App">
        <Header/>
        <Switch> 
          
          <Route exact path="/courses">
            <Courses/> 
          </Route>
          <Route exact path="/faq">
            <FAQ/> 
          </Route>
          <Route exact path="/">
            <Home/> 
          </Route>
        </Switch>
        <Footer/> 
      </div>
    </Router>
      /* folder name (ex. FAQ, Courses) is the component name */
      /* after writing header, make folders for the components, and import into App.js file*/
  );
}

export default App;
