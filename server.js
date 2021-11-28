const express = require('express');
// const Projects = require("./models/projects");
const fs = require('fs');
const pdfParse = require('pdf-parse');

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




app.get('/blanden-resume.pdf', (req, res) => {
    var filePath = "/public/files/blanden-resume.pdf";

    fs.readFile(__dirname + filePath , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});


app.listen(PORT, () =>{
    console.log('running on ' + PORT)
    })