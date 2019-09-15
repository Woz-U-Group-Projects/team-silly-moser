import React, { Component } from "react";
import "./projectList.css";
import axios from "axios";

export class ProjectList extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
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

  render() {
    return (
      <div>
        <h3>List of Projects</h3>
        <ul>
          {this.state.projects.map(projects => (
            <a href="http://www.google.com" target="_blank">
              <li key={projects.id}>
                {" "}
                {projects.id} <strong>Name:</strong> {projects.name} <br></br>{" "}
                <strong>Team Members: </strong> {projects.teamMembers}{" "}
              </li>
            </a>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProjectList;
