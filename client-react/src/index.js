import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import CreateProject from './components/createProject/createProject';
// import DeleteProject from './components/deleteproject/deleteProject';
// import UpdateProject from './components/updateProject/updateProject';
// import ProjectList from './components/projectList/projectList';




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
