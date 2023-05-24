const express = require("express");
var exphbs  = require('express-handlebars');
const path = require("path");
const port = 3000;

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
})

app.use(express.static(path.join(__dirname,'static')));

app.use("/",require(path.join(__dirname,"routes/blog.js")))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
