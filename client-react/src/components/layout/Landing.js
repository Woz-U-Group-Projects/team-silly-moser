import React, { Component } from "react";
import { Link } from "react-router-dom";
import './landing.css';





class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align"><br></br>
          <h1>Welcome to Schedule Master!</h1>
            {/* <h4>
            {" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
              scratch
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Create a (minimal) full-stack app with user authentication via
              passport and JWTs
            </p> */}
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "30%",
                  borderRadius: "3px",
                  letterSpacing: "1px",
                  color: "indigo",
                  fontSize: '1.3em',
                  textDecoration: "underline",
                  fontWeight: 'bold'
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >

                
                Click to Register
              </Link>
            </div>
            <div className="col s6 hover">
              <Link
                to="/login"
                style={{
                  width: "30%",
                  borderRadius: "3px",
                  letterSpacing: "1px",
                  color: "indigo",
                  fontSize: '1.3em',
                  textDecoration: "underline",
                  fontWeight: 'bold'
                  
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Click to Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
