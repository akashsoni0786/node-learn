
const home = (req,res)=>{
    res.send("<h1>Hello World</h1>");
}
const about = (req,res)=>{
    res.send("<h1>About Section</h1>");
}

module.exports.about = about;
module.exports.home = home;