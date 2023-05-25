const path = require("path");
const location = path.join(__dirname+"/../");

// const home = (req,res)=>{
//     res.sendFile(location+"page.html");
// }
const home = (req,res)=>{
    res.render("index",{
        name:"Akash Soni"
    })
}
const about = (req,res)=>{
    res.send("<h1>About Section</h1>");
}

module.exports.about = about;
module.exports.home = home;