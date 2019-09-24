import React, { Component } from "react";
import { Link } from "react-router-dom";
import './landing.css';
const calendar=require('./calendar.png');




class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align"><br></br>
          <h2>Welcome to <strong><i>Schedule Master</i></strong></h2>
          <img src ={calendar} id="schedule" alt="calendar"></img>
            
            <br /><br></br>
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "30%",
                  borderRadius: "3px",
                  letterSpacing: "1px",
                  color: "#CC0033",
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
                  color: "blue",
                
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
