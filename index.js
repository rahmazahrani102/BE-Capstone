const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const connection = require("./app/config/database");

const mainRouter = require("./app/routers/routeMain");

const app = express();

<<<<<<< HEAD
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(express.static("public"));
=======
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
>>>>>>> dbc6bfda8d692a7b73a4f715346e1fc3aa809c38

// http router
app.use(mainRouter);

// static router
app.use("/static", express.static(path.join(__dirname, "static")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./static"));

const port = 3000;
app.listen(port, function () {
  console.log("Server started on", port);
  connection
    .authenticate()
    .then(function () {
      console.log("Database connected");
    })
    .catch(function (err) {
      console.log("Error connecting to Database", err);
      process.exit(1);
    });
});
