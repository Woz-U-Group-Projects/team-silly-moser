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

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value
  //   });
  // }

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
  // onProjectCompleted(e) {
  //   this.setState({
  //     project_completed: e.target.value
  //   });
  // }

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
      alert('project' + ' ' + this.state.project_title + ' ' + 'created');

    //console.log("form sent!");
    //console.log(`Project title: ${this.state.project_title} `);
    //alert(`Project ${this.state.project_title} created!`);

    // const thisProject  = {
    //   name: this.state.name,
    //   createdBy: this.state.createdBy
    // }

    // const {
    //    name
    //    createdBy: this.state.createdBy
    // } = this.state;

    // axios.post('http://localhost:3001/projects/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         allProjects: response.data.push(project => project),
    //         username: response.data[0].username
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

    // fetch('/api/projects/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //      "Authorization":"Bearer " + localStorage.get("jwt")
    //   },
    //   body: JSON.stringify({
    // project inforation
    //     name: signUpEmail,
    //     password: signUpPassword,
    //   }),
    // }).then(res => res.json())
    //   .then(json => {
    //     console.log('json', json);
    //     if (json.success) {
    //       this.setState({
    //         signUpError: json.message,
    //         isLoading: false,
    //         signUpEmail: '',
    //         signUpPassword: '',
    //       });
    //     } else {
    //       this.setState({
    //         signUpError: json.message,
    //         isLoading: false,
    //       });
    //     }
    //   });

    // axios.post('http://localhost:3001/projects/')
    // .then(response => {
    //   if (response.data.length > 0) {
    //     this.setState({
    //       allProjects: response.data.push(project => project),
    //       username: response.data[0].username
    //     })
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    // })

    // this.setState({

    //   project_title: '',
    //     project_description: '',
    //     createdBy: '',

    // })
  }

  render() {
    return (
      <div>
        <h3>Create a Project</h3>
        <form className="ok" onSubmit={this.onSubmit}>
          <br></br>
          {/* <label><strong>User:</strong> </label>
          <select ref="userInput"
              // required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select> */}
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
          <input type="submit" value="Submit" />
        </form>

        {this.state.project_title}
        <br></br>
        {this.state.project_description}
      </div>
    );
  }
}

export default CreateProject;
