const express = require("express");
const routes = require("./routes");
const hbs = require("hbs");
const app = express();
app.use(express.json());
app.use(routes);
app.set("view engine","hbs")
const port = 5000;



app.listen(port,()=>{
    console.log("Server is working on",port);
})