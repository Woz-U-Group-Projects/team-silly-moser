import React, { Component } from 'react'
import './createProject.css';
import axios from 'axios';
export class CreateProject extends Component {
  constructor(props){
    super(props);

    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectDescription = this.onChangeProjectDescription.bind(this);
    this.onProjectCompleted = this.onProjectCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
          username: '',
          project_title: '',
          project_description: '',
          project_completed: false,
          allProjects: []
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:3001/projects/')
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           allProjects: response.data.map(project => users.username),
  //           username: response.data[0].username
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //   }

    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }

    onChangeProjectName(e) {

      this.setState({
        project_title: e.target.value
      });
    }
      
    onChangeProjectDescription(e) {

      this.setState({
        project_description: e.target.value
      });
    }
    onProjectCompleted(e) {

      this.setState({
        project_completed: e.target.value
      });
    }


    onSubmit(e) {
      e.preventDefault();

      console.log('form sent!');
      console.log(`Project title: ${this.state.project_title} `);
      alert(`Project ${this.state.project_title} created!`);

      const thisProject  = {
        username: this.state.username,
        project_description: this.state.project_description,
        project_title: this.state.project_title,
        createdBy: this.state.createdBy
      }

      axios.post('http://localhost:3001/projects/add', thisProject)
      .then(res => console.log(res.data));

      
      // this.setState({

      //   project_title: '',
      //     project_description: '',
      //     createdBy: '',

      // })

    }

    render() {
        return (
            <div><h3>List of Projects</h3>
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
              Name of Project:  <br></br>
              <input type="text" value={this.state.project_title} onChange={this.onChangeProjectName} /> 
            </label>
            <br></br><br></br>
            <label>
              Description:  <br></br>
              <input type="text" value={this.state.project_description} onChange={this.onChangeProjectDescription} />
            </label>
            {/* <label>
             Completed: 
              <input type="radio" value={this.state.project_description} onChange={this.onChangeProjectDescription} />
            </label> */}<br></br><br></br>
            <input type="submit" value="Submit" />
          </form>

          {this.state.project_title}<br></br>
          {this.state.project_description}</div>
          );
    }
}

export default CreateProject
