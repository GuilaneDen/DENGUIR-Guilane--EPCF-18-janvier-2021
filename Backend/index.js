const express = require('express');

const sequelize = require('./BDD/database');
const people = require('./BDD/people');

const router = express.Router();
const controllers = require('./controllers');

const app = express();
router.post('/add-people', controllers.postAddPeople);

sequelize.sync()
  .then((res) => {
    console.log(res);
    app.listen(3001);
  })
  .catch((err) =>{
    console.log(err);
  });

