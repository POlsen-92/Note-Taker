//EXPRESS IMPORT
const express = require("express");
const app = express();
const path = require('path');
const { clog } = require('./public/middleware/clog');
const PORT = process.env.PORT || 3000;
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('./helpers/fsUtils');
const getIndexById = require('util');

//MIDDLEWARE
app.use(clog) //Logs requests made to the server
app.use(express.json()) //
app.use(express.urlencoded({ extended:true })) //method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.static('./public')) //Searches for routes in public directory first


//HTML Routes
//Route for note page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


//API Routes
app.get('/api/notes', (req,res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)
    ))
);

app.post('/api/notes', (req,res) => {
    const { title, text } = req.body;

    if(title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json')

        res.json('Note added Successfully');
    } else {
        res.error('Error in adding tip')
    }
})

app.delete(`/api/notes/:id`, (req, res) => {
    console.log("hello")
    const { id } = req.params
    console.log(id)
    readFromFile('./db/db.json').then((data) => {
        data = JSON.parse(data)
        console.log(data)
        const newNotes = data.filter(data => data.id !== id)
        console.log(newNotes)
        writeToFile('./db/db.json', newNotes)
    }).then(getAndRenderNotes());
})

//Route for landing page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.listen( PORT,()=>{
    console.log("listenin to port "+ PORT)
})