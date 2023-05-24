const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");
const router = express.Router();


router.get("/",(req,res)=>{
    // res.sendFile(path.join(__dirname,'../templates/index.html'))
    res.render("home")
});

router.get("/blog",(req,res)=>{
    res.sendFile(path.join(__dirname,'../templates/bloghome.html'))
})

router.get('/blogpage/:slug',(req,res)=>{
    myblog = blogs.filter((e)=> {return (e.slug == req.params.slug)});
    console.log(myblog)
    res.sendFile(path.join(__dirname,'../templates/blogpage.html'))
})
module.exports = router