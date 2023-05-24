const express = require("express");
const about = require("./controllers/about");
const route = express.Router();
const api = require("./controllers/apidata");

route.get("/",about.home);
route.get("/api",api.api);
route.get("/about",about.about);
route.get("/contact/:name/:abc?",(req,res)=>{
    res.send(`<h1>Contact Section ${req.params.name}</h1>`);
});
module.exports = route;