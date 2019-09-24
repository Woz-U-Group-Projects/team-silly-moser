import React, { Component } from "react";
import "./projectList.css";
import axios from "axios";


export class ProjectList extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
      project_title: "",
    project_teamMembers: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/projects/projectList/list", {
        headers: { Authorization: localStorage.getItem("jwtToken") }
      })
      .then(response => {
        this.setState({ projects: response.data });
        console.log(response.data);
      });
  }



  deletePost () {
 alert('delete');


 }

  render() {
    return (
      <div>
        <h4>My Projects:</h4>
        <ul>
          {this.state.projects.reverse().map(projects => (
            
              <li key={projects.id}>
                {" "}
                <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
                
                {projects.id} <strong>Name:</strong> {projects.name} <br></br>{" "}
                <strong>Team Members: </strong> {projects.teamMembers}{" "}
            </a>
            <button className="btn btn-danger"onClick= {this.deletePost} >X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProjectList;
