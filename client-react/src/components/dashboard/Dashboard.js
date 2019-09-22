import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import ProjectList from "../projectList/projectList";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;


    return (
      <div>
        <div >
          <div>
            
            <h2 id="welcome"><br></br>
              <b>Welcome,</b> {user.name.split(" ")[0]}!

            </h2>
            <button
              style={{
                width: "150px",
                marginTop: "-2%",
             
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            ><br></br>
              <h2 className="registerAction">Logout</h2>
            </button>
            <ProjectList/>
            
            
          </div>
          
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
