import React, { Component } from "react";
import "./createProject.css";
import axios from "axios";

export class CreateProject extends Component {
  constructor(props) {
    super(props);

    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeTeamMembers = this.onChangeTeamMembers.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      project_title: "",
      project_teamMembers: "",
    };
  }

  componentDidMount() {}

  onChangeProjectName(e) {
    this.setState({
      project_title: e.target.value
    });
  }

  onChangeTeamMembers(e) {
    this.setState({
      project_teamMembers: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/projects/create",
        { projectName: this.state.project_title, 
          members: [this.state.project_teamMembers]
        },
      
        {
          headers: {
            Authorization: localStorage.getItem("jwtToken")
          }
        }
      )
      .then(result => console.log(result));
      alert('Project ' + this.state.project_title + ' created!');

    
  }

  render() {
    return (
      <div>
        <h3>Create a Project</h3>
        <form className="ok" onSubmit={this.onSubmit}>
          <br></br>

          <label>
            Name of Project: <br></br>
            <input
              type="text"
              value={this.state.project_title}
              onChange={this.onChangeProjectName}
            />
          </label>
          <br></br>
          <br></br>

           <label>
            Team Members: <br></br>
            <input
              type="text"
              value={this.state.project_teamMembers}
              onChange={this.onChangeTeamMembers}
            />
          </label> 
          {/* <label>
             Completed: 
              <input type="radio" value={this.state.project_description} onChange={this.onChangeProjectDescription} />
            </label> */}
          <br></br>
          <br></br>
          <input type="submit" className="btn btn-danger" value="Submit" />
        </form>

        {this.state.project_title}
        <br></br>
        {this.state.project_teamMembers}
      </div>
    );
  }
}

export default CreateProject;
