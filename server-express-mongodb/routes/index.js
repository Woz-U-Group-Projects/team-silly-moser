var express = require("express");
var router = express.Router();

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.render("index", { title: "Express" });
// });


// import routes

router.post('/', function(req, res) {
  res.send('You successfully created a POST route!');
});

router.get('/', function(req, res, next) {
  res.render('people', { title: 'Schedule Master Users', people: [
   
    {
      name: 'John Denver',
      age: '59',
      userID: 682545
    },
    {
      name: 'Doctor Evil',
      age: '118',
      userID: 704352
    },
    {
      name: 'Iron Man',
      age: '38',
      userID: 639863
    },
    {
      name: 'Bernie Sanders',
      age: '84',
      userID: 8538
    },
    {
      name: 'Charlotte Church',
      age: '18',
      userID: 842051
    },
    {
      name: 'Ed Sheeran',
      age: '28',
      userID: 303625
    }
]});
  });

router.put('/', function(req, res) {
  res.send('You successfully created a PUT route!');
});

router.delete('/', function(req, res) {
  res.send('You successfully created a DELETE route!');
});

//router.delete("/user/:id", function (req, res, next) {
 // let userId = parseInt(req.params.id);
//  models.useer
 //   .destroy({
 //     where: { user_id: userId }
  //  })
  //  .then(result => res.redirect('/user'))
  //  .catch(err => { 
   //   res.status(400); 
  //    res.send("There was a problem deleting the actor. Please make sure you are specifying the correct id."); 
  //  }
//);
//});



module.exports = router;
