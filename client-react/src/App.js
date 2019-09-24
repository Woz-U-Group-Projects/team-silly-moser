

// import Project from "./Project";

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

// import Navbar from "./components/layout/Navbar";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
  
  import "bootstrap/dist/css/bootstrap.min.css";
  import "./App.css";

  // import Posts from './components/Posts';
import PostForm from './components/posts/Postform';
  import CreateProject from './components/createProject/createProject';
  import CreateTodo from "./components/todo/create-todo.component";
import EditTodo from "./components//todo/edit-todo.component";
import TodosList from "./components/todo/todos-list.component";
  import ProjectList from './components/projectList/projectList';
  import Users from './components/Users/users';
  import Calendar from './components/calendar/calendar';
  
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
  
      // Redirect to login
      window.location.href = "./login";
    }
  }

  export const onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

function App() {


  return (
    <Provider store={store}>
    <div className="App"><br></br>
    {/* <h1><i>Schedule Master</i></h1> */}
    {/* <Project /> */}

    <Router>

      <nav className="nav navbar navbar-expand-lg  bg-light">
        <Link to="/" className="navbar-brand">Home</Link>
        {/* <Link to="projects" className="navbar-brand">List of Projects</Link> */}
        <Link to="/create" className="navbar-brand">Create Project</Link>
        {/* <Link to="/update/:id" className="navbar-brand">Update Project</Link>
        <Link to="/delete" className="navbar-brand">Delete Project</Link> */}
        <Link to="/calendar" className="navbar-brand">Calendar</Link>
        <Link to='/todo' className='navbar-brand'>Todos</Link>
        <Link to='/createtodo' className='navbar-brand'>Add Todos</Link>


        {/* <Link to="/user" className="navbar-brand" component={CreateUser}>Create User </Link> */}

        {/* <Link to="/userList" className="navbar-brand" component={Users}>Users</Link> */}
        {/* <Link to="/Posts" className="navbar-brand">Posts</Link> */}
        <Link to="/PostForm" className="navbar-brand">Posts</Link>
        <Link to="/register" className="navbar-brand">Register</Link>
        <Link to="/Login" className="navbar-brand">Dashboard</Link>
        
        </nav>
      
        <Route path='/projects' exact component={ProjectList} />
        <Route path='/create' exact component={CreateProject} />
        {/* <Route path='/delete' exact component={DeleteProject} />
        <Route path='/update/' exact component={UpdateProject} /> */}

          <Route path="/todo" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/createtodo" component={CreateTodo} />
        <Route path='/calendar' exact component={Calendar} />
        {/* <Route path="/user" exact component={CreateUser} />  */}
        <Route path="/userList" exact component={Users} />
        {/* <Route path='/Posts' exact component={Posts} /> */}
        <Route path='/PostForm' exact component={PostForm} />
        <Route exact path="/" component={Landing} />

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
    </Router> <br></br><br></br>
    </div>
    </Provider>
  );
}



export default App;                                                                                                                                                       
