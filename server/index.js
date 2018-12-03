const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { Client } = require('pg');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../client/dist`));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Postgres Connection
const connection = 'postgresql://drewcurtis@localhost:5432/lts';

const db = new Client(connection);
db.connect();


// Routes-Endpoints
app.post('/api/letters', (req, res) => {
  db.query(`insert into letters (firstName, lastName, subject, country, city, body)Values('${req.body.firstName}', '${req.body.lastName}', '${req.body.subject}', '${req.body.country}', '${req.body.city}', '${req.body.message}')`, (err, data) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      res.send(`Post Successful: ${data}`);
    }
  })
})

app.get('/letters', (req, res) => {
  db.query(`select * from letters`, (err, rows) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      res.send(rows.rows);
    }
  });
});


const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});