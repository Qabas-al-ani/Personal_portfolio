// import React from "react";
// import Home from "./components/Home";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Resume from "./components/Resume";
// import {Route} from "react-router-dom"
// import Projects from "./components/Projects"
// import Contacts from "./components/Contacts"
// import AboutMe from "./components/AboutMe"
// import "./App.css";

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <Route exact path="/" component={Home} />
//       <Route path="/about-me" component={AboutMe} />
//       <Route path="/resume" component={Resume} />
//       <Route path="/projects" component={Projects} />
//       <Route path="/contacts" component={Contacts} />

//     </>
//   );
// }

// export default App;

import React from "react";
import Home from "./components/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import AboutMe from "./components/AboutMe";
import { HashRouter as Router, Route } from "react-router-dom"; // ✅ use HashRouter
import "./App.css";

function App() {
  return (
    <Router>
      {" "}
      {/* ✅ Wrap all routes in HashRouter */}
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contacts" component={Contacts} />
    </Router>
  );
}

export default App;
