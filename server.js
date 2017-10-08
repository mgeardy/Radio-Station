const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path');

app.use(express.static(__dirname + '/dist'));

mongoose.Promise = global.Promise;
const db = "radio_broadcast";
mongoose.connect("mongodb://localhost:27017/" + db, {useMongoClient: true }, (err) => {
    if(err){
        console.log("Connect to database " + db + " FAILED", err);
    }else{
        console.log("Connected to database " + db);
    }
});


app.get('/', (req, res)=>{ res.sendFile(path.join(__dirname, "dist/index.html")); });

app.listen(3000, ()=>{ console.log('Server at port ' + port)});