const express = require('express')
const path = require ('path')
const connection = require('./app/models/ProgramModels')

const app = express();
const mainRouter = require('./app/routeMain');

app.use(express.json()); // supaya express bisa response json
app.use(express.urlencoded({ extended: false })); // supaya express bisa menerima body

// http router
app.use("/", mainRouter);

// static router
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs')
//app.set('views', path.join(__dirname, './static'))

const port = 3000
app.listen(port, function(){
    console.log("server start on", port)
    connection.authenticate()
    .then(function(){
        console.log("Database connected")
    })
    .catch(function(err){
        console.log("Error saat koneksi ke database", err)
        process.exit()
    })
})