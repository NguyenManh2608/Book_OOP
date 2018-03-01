const express= require('express');
const app = express();
const router = require('./router');
const repository = require('./bookrepository');
const knex = require('knex')(require('./config'));
const bodyparser = require('body-parser');

app.set("book",new repository(knex));
app.use(bodyparser.json());
app.use(router);

app.listen(3000, () =>{
    console.log('stared');
});