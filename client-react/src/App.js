import React from "react";
import Project from "./Project";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CreateProject from './components/createProject';
import projectList from './components/projectList';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Project />
      <Router>
      <nav className="nav navbar navbar-expand-lg  bg-light">
        <Link to="/list" className="navbar-brand">List of Projects</Link>
        <Link to="/create" className="navbar-brand">Create a Project</Link>
        {/* <Link to="/update/:id" className="navbar-brand">Update a Project</Link>
        <Link to="/delete" className="navbar-brand">Delete a Project</Link> */}
      </nav>
      <Route path='/create' exact component={CreateProject} />
      <Route path='/list' exact component={projectList} />
      </Router></div>
  );
}

export default App;
