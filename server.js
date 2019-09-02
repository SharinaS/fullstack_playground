'use strict'

// ===== Application Dependencies =====
const express = require('express');
const pg = require('pg');

// ===== Environment variables =====
require('dotenv').config();

// ===== Application Setup ======
const app = express();
const PORT = process.env.PORT;

// ===== Express middleware ======
// Utilize ExpressJS functionality to parse the body of the request
app.use(express.urlencoded({ extended: true }));
// Specify a directory for static resources
app.use(express.static('./public'));

// ===== Database Setup: =====
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.log(err));

// ===== Set the view engine for server-side templating =====
app.set('view engine', 'ejs');

//*********************************
// PLAYGROUND 
//*********************************

// ===== API Routes =====
// app.get('/helloworld', (request, response) => {
//   response.send('hello world, this is from the app.get block of code')
// });

app.get('/helloworld', helloWorld);
app.get('/dogs', getDogs);
app.get('/dog-detail/:dog_id', dogDetail);



// ===== Call Back Functions =====
//proof of life
function helloWorld (request, response){
  response.send('hello world, this is from a function');
}



// function that renders what's on the page, then renders data from a hardcoded object, then renders data from the DB
function getDogs (request, response) {
  // render the page
  //response.render ('./dogs.ejs');

  // render data from an object onto dogs.ejs page:
  // const dogData = [
  //   {
  //     dog_name: 'Luna',
  //     breed: 'Chesapeake retriever',
  //     age: 6
  //   },
  //   {
  //     dog_name: 'Ollie',
  //     breed: 'Chesapeake retriever',
  //     age: 3
  //   },
  //   {
  //     dog_name: 'Luna',
  //     breed: 'Chesapeake retriever',
  //     age: 1
  //   }
  // ];
  // response.render('./dogs.ejs', {dogList : dogData});

  //database query
  client.query('SELECT * FROM dogs')
  .then(resultFromSQL => {
    console.log(resultFromSQL);
    response.render('./dogs.ejs', {dogList : resultFromSQL.rows})
  });
}


function dogDetail (request, response) {
  console.log(request.params);

  // client.query('SELECT * FROM dogs WHERE id=$1', [request.params.dog_id])
  // .then(singleDog => {
  //   console.log(singleDog.rows[0]);
  //   response.render('./dog-detail', singleDog.rows[0]);
    
  // });

  response.render('./dog-detail');
}



// ===== listen for requests =====
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));


// //******** MOST BASIC SERVER EVER: ***********
// const express = require('express')
// const app = express()
// const PORT = process.env.PORT || 4002
// app.get('*', (req, res) => { res.sendFile('index.html', { root: './public' }) })

// app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
// // ********************************************