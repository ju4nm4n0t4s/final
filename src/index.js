const express = require('express');
const morgan=require('morgan');
const path=require("path");
const {mongoose}=require('./database');
const app = express();
//settings
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan('dev'));
app.use(express.json())
//routes
app.use('/api/task',require('./routes/task.routes'));
//static files
app.use(express.static(path.join(__dirname,'public')));
//stating the server

app.listen(3000, ()=>{
  console.log(`Server on port ${app.get('port')}`);
})