import React, { Component } from 'react';
import PropTypes from 'prop-types';


var project = React.createClass({
    getInitialState: function(){
        return {updating: false}
    },
    update: function(){
        this.setState({updating: true});
    },
    save: function (){
        this.setState({updating:false});
    },
    
    renderNormal: function (){
        return(
            <div className="projectContainer">
                <div className="projectDescription">{this.props.children}</div>
                <button onClick={this.update} className="button-primary">Update</button>
                <button onClick={this.delete} className="button-danger">Delete</button>
            </div>
        )
    }
})

render()