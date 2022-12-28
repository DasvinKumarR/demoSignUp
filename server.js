const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is up at port 3000");
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){

    const firstName = String(req.body.firstName);
    const lastName = String(req.body.lastName);
    const email = String(req.body.email);
    var firstNameLen = firstName.length;
    var lastNameLen = lastName.length;
    var emailLen = email.length;
    if (firstNameLen <= 3 || lastNameLen <= 3 || emailLen === 0) {
        res.sendFile(__dirname + "/errorMsg.html");
    }
    else {
        res.sendFile(__dirname + "/success.html");
    }
});

app.post("/errorMsg", function(req, res){
    res.redirect("/");
});





