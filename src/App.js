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
import Events from "./Events";
import FAQ from "./FAQ";
import Footer from "./Footer";

function App() { // same thing as 
  // class App extends React.Component {
  // render() { } }
  return (
    <Router>  
      <div className="App">
        <Header/>
        <Switch> 
          {/* Switch is like the part that you want to switch (you don't want to place header individually in every page so header should be outside of the Switch) */}
          <Route exact path="/events">
            <Events/> 
          </Route>
          <Route exact path="/faq">
            <FAQ/> 
          </Route>
          <Route exact path="/">
            <Home/> 
          </Route>
        </Switch>
        <Footer/> 
        {/* Header and Footer will always be on every page due to format above */}
      </div>
    </Router>
      /* folder name (ex. FAQ, Courses) is the component name */
      /* after writing header, make folders for the components, and import into App.js file*/
  );
}

export default App;
