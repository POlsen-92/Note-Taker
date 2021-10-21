//EXPRESS IMPORT
const express = require("express");
const app = express();
const path = require('path');
const { clog } = require('./Develop/middleware/clog');
const PORT = process.env.PORT || 3000;
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('./Develop/helpers/fsUtils');

//MIDDLEWARE
app.use(clog) //Logs requests made to the server
app.use(express.json()) //
app.use(express.urlencoded({ extended:true })) //method inbuilt in express to recognize the incoming Request Object as strings or arrays.
app.use(express.static('./Develop/public')) //Searches for routes in public directory first


//HTML Routes
//Route for note page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
);
//Route for landing page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);


//API Routes
app.get('/api/notes', (req,res) => 
    readFromFile('./Develop/db/db.json').then((data) => res.json(JSON.parse(data)))
);

app.post('/api/notes', (req,res) => {
    const { title, text } = req.body;

    if(title && text) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };

        readAndAppend(newNote, './Develop/db/db.json')

        res.json('Note added Successfully');
    } else {
        res.error('Error in adding tip')
    }
})


app.listen( PORT,()=>{
    console.log("listenin to port "+ PORT)
})