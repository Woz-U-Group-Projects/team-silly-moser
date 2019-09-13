import React, { Component } from 'react'
import './deleteProject.css';
import axios from 'axios';

//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";

//MongoClient.connect(url, function(err, db) {
  //if (err) throw err;
  //var dbo = db.db("mydb");
  //var myquery = { address: '' };
  //dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //if (err) throw err;
    //console.log("1 document deleted");
    //db.close();
 // });
//}); 



export class DeleteProject extends Component {
    onDelete=() => {
        axios.delete("/localhost:3001/projects/"+item.id).then(result => {
            console.log(res);
            console.log(res.data);
                
            

        });
    }


    render() { 
        return (
            <div>
                <h3>Delete Project Component</h3>
            </div>
        )
    }
}

export default DeleteProject
