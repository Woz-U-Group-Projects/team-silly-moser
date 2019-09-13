import React, { Component, useState } from 'react';
import WoomyCalendar from 'react-calendar';
import ReactDOM from 'react-dom';
import "./calendar.css";
import axios from 'axios';

class Calendar extends Component {
  constructor(props){
    super(props);
      this.state = {
    date: new Date(),
    posts: [{title:"test",date:"09/12/19"},{title:"test2",date:"sep 15 2019"}]
    }
    this.postTitle = React.createRef();
  }


    
  onClickDay = date => this.setState({date});
  tileContent = ({date,view}) => {
    if(view=="month") {
      let count = this.state.posts.filter(x => new Date(x.date).toDateString() == date.toDateString()).length;
      if(count > 0){
        return <>&bull;</>
      }
    }
  }

  submitPost = () => {


    axios.post("/projects/create", 
      {
        postTitle:this.postTitle
      },
      {
        headers: {"Authorization":"Bearer " + localStorage.getItem("jwt")}
      })
    .then((response) => {})
    .catch((error) => console.log(error));

    alert(this.postTitle.current.value);
  }
  
 render() {
    return (
      <div className="Sample__container">
        <main className="Sample__container__content">
        <WoomyCalendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.onClickDay}
          tileContent={this.tileContent}
        />
        <h3>Date Selected:{this.state.date.toDateString()}</h3>
        {/* {this.state.projects.filter().map()} */}
        </main>
        <div id="projectCreate">
          <h3 id="createLabel">Create New</h3>
        <textarea ref={this.postTitle}></textarea>
        <button id="button" className="button" onClick={this.submitPost}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Calendar;