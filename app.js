var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));    

//Landing Page
app.get("/", function(req, res){
   res.render("home"); 
});

//Home page
app.get("/shipout", function(req, res){
   res.render("shipout"); 
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("ShopOut is on...");
});