const express = require("express");
const path = require("path");
const cors = require("cors");
const connection = require("./app/models/databases");
const mainRouter = require("./app/routeMain");
const app = express();

app.use(cors());
<<<<<<< HEAD
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// http router
=======
app.use(express.static("public"));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 
>>>>>>> e2a147a95973232f44ea5c9507e817ec0dd6e328
app.use(mainRouter);
app.use("/static", express.static(path.join(__dirname, "static")));
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
