const express = require('express');
// const Projects = require("./models/projects");


const app = express();


require('dotenv').config()
const PORT = process.env.PORT

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended:false }))

app.get('/', (req,res) => {
    // Projects.find({}, (error, project) => {
        res.render("index.ejs", {
        //    project
        // })
    })
  
});


app.listen(PORT, () =>{
    console.log('running on ' + PORT)
    })