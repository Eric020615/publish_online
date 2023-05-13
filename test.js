const express = require("express");
const path = require("path");
const app = express();
app.set("views", path.join(__dirname,"public"));
app.set("view engine","hbs");
app.use(express.static("public/Assests/CSS"))

app.get('/',(req,res)=>{
    res.render("intro");
})

app.get('/signup',(req,res)=>{
    res.render("signup");
})

app.listen(3000, ()=>{
    console.log("Port Connected")
})