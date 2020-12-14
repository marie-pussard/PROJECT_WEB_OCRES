var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const cors= require('cors');


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var graphRouter =require("./routes/graphs");

var app = express();
var port = process.env.PORT || 3001; 



app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/index", indexRouter);
app.use("/users", usersRouter);
app.use("/graphs",graphRouter);

var URLdb = "mongodb+srv://dashboard2020:dashboard2020@cluster0.9nhpc.mongodb.net/dashboard2020?retryWrites=true&w=majority";
//var URLdb = "mongodb://localhost:27017/DashBoardMONTELSBONNET"
mongoose.connect(URLdb, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
    );

var connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection établie");
})



app.listen(port, () => {
    console.log('Server is running on port:'+port);
});

module.exports = app;