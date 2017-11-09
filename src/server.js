//Dependencies
const express = require('express');
const mustache = require('mustache-express');
const bodyparser = require('body-parser');

const server = express();


//Server configure
server.engine('mustache', mustache());
server.set('views', './views');
server.set('view engine', 'mustache');
server.use(bodyparser.urlencoded( { extended: false }));
server.use(express.static('public'));

//GET REQUESTS
server.get('/', function(request, response) {
  response.render('main');
  //TODO: response if errors out?
  // if (err) {
  //   throw (err);
  //   response.render("Sorry, but there was a problem loading this page.")
  // }
})


//POST REQUESTS
//TODO:
//1. Post request for making project images larger when clicked. This might be a CSS thing?
//2. Post request to send email to hi@michellehodg.es when inquiries are sent out

//LISTEN
server.listen(3000, function() {
  console.log("Server is runnin!");
})

//TODO:
//1. LINKS > Word resume, Sketch resume, LinkedIn, GitHub, Email (does this need to be setup to redirect?)
