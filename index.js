const express = require("express")
const app = express();
const port = 3000;

app.set("view engine","ejs");
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/tables",(req,res)=>{
    res.render("pages/tables");
})

app.get("/formWizard",(req,res)=>{
    res.render("pages/formWizard")
})

app.get("/formBasic",(req,res)=>{
    res.render("pages/formBasic")
})

app.listen(port,(error)=>{
    if(error){
        console.log(error);
        
    }
    else
        console.log("server is started");
        console.log("https://localhost:",port);
        
        
})