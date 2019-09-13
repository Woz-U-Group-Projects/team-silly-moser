import React, { Component } from 'react'
import './projectList.css';

export class ProjectList extends Component {

        constructor(){
            super();
            this.state= {
                projects: []
            }
        };
    
    componentDidMount(){
    fetch('api/projects/')
    .then(res => res.json()).then(projects => this.setState({projects}, () => console.log('peeps fetched!', projects)));
    
    };
    
        render() {
            return (
                <div>
                    <h3>List of Projects</h3>
                    <ul>
                        {this.state.projects.map(projects => <a href="http://www.google.com"target="_blank"><li key={projects.id}> {projects.id} <strong>Name:</strong>  {projects.projectName} <br></br> <strong>Description: </strong> {projects.description} </li></a>)}
                    </ul>
    
                </div>
            )
        }
    }

    

export default ProjectList;
