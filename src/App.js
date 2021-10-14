import React from "react";
import Home from "./components/Home";
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/Resume";
import {Route} from "react-router-dom"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"
import "./App.css";


function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contacts" component={Contacts} />
   
    
    </>
  );
}

export default App;
