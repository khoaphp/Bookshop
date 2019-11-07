// express ejs body-parser 
// multer mongoose
// bcryptjs
// express-session 

var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.listen(3000);


// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://giaongo92:akKOQokhzWOrfgUX@serverkhoapham-qplsb.mongodb.net/BookShop?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log("Error Mongodb: " + err);
    }else{
        console.log("Mongodb connected successfully.");
    }
});

app.get("/", function(req, res){
    res.render("trangchu",
        {
            TRANG: "home",
            LANG: JP
        }
    );
});

app.get("/cate/:id", function(req, res){
    res.render("trangchu",
        {
            TRANG: "cate",
            LANG: JP
        }
    );
});

app.get("/detail/:id", function(req, res){
    res.render("trangchu",
        {
            TRANG: "detail",
            LANG: JP
        }
    );
});




var VI = {
    WELCOME : "Chào mừng",
    SEARCH  : "Tìm kiếm"
}

var EN = {
    WELCOME : "Welcomeg",
    SEARCH  : "Search"
}

var JP = {
    WELCOME : "ようこそ",
    SEARCH  : "調べる"
}