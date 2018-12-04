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
  db.query(`insert into letters (firstName, lastName, subject, country, city, message)Values('${req.body.firstName}', '${req.body.lastName}', '${req.body.subject}', '${req.body.country}', '${req.body.city}', '${req.body.message}')`, (err, data) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      res.send(`Letters Post Successful: ${data}`);
    }
  })
})

app.post('/api/list', (req, res) => {
  db.query(`insert into list (firstName, lastName, country, city, isNice, isChecked)Values('${req.body.firstName}', '${req.body.lastName}', '${req.body.country}', '${req.body.city}', '${req.body.isNice}', '${req.body.isChecked}')`, (err, data) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      res.send(`List Post Successful: ${data}`);
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

app.get('/list', (req, res) => {
  db.query(`select * from list`, (err, rows) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      res.send(rows.rows);
    }
  });
});

app.delete('/api/letters/:id', (req, res) => {
  const { id } = req.params;
  db.query(`delete from letters where id = ${id}`, (err, rows) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      res.send(rows.rows);
    }
  })
})

app.put('/api/list/:id', (req, res) => {
  const { id } = req.params;
  console.log('REQUST', req)
  db.query(`update list set isNice = '${req.body.isNice}', isChecked = ${true} where id = ${id}`, (err, rows) => {
    if (err) {
      console.log('ERROR', err);
    } else {
      res.send(rows.rows);
    }
  })
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});