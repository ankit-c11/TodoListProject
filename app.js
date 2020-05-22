var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static(__dirname + "/views"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var todoRoutes = require("./routes/todos");
app.use("/api/todos", todoRoutes);

app.get("/", function(req,res){
    res.sendFile("index.html");
})

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Server has Started!!");
})