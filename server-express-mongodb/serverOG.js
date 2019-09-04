// This was a dummy express server with 


const express = require('express');
const app = express();
var cors = require("cors");
app.use(cors());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


app.get('/api/projects', (req, res) => {
    const projects = [
        {id: 1, projectName: 'Build a MERN stack app', description: 'Project Mgmt'},
        {id: 2, projectName: 'Take a vacation', description: 'Tropical'},
        {id: 3, projectName: 'Build Resume', description: 'Career Services,LinkedIn, GitHub etc.'}
    ];
    
    res.json(projects);

});

app.get('/api/users', (req, res) => {
const users = [
    {id: 1, firstName: 'Red', lastName: 'Skelton'},
    {id: 2, firstName: 'Rip', lastName: 'Torn'},
    {id: 3, firstName: 'Curtis', lastName: 'Mayfield'}
];
res.json(users);
});

const port = 5000;
app.listen(port, () => console.log(`Server on port ${port}`));

