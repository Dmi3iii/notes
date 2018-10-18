import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import {serverPort} from '../etc/config.json';

import * as db from './utils/DataBaseUtils.js'

db.setUpConnection();

const app=express();

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(express.static('public'));
app.use(allowCrossDomain);
app.use(bodyParser.json());

app.get('/notes',(req,res)=>{
  db.listNotes().then(data => res.send(data));
});

app.post('/notes',(req,res)=>{
  db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id',(req,res)=>{
    db.deleteNote(req.params.id).then(data => res.send(data));
});

app.get('/',(req,res)=>{
    //res.render('index.html');
    res.sendFile(path.join(__dirname+'/../public/index.html'));
});

const server=app.listen(serverPort,()=>{
  console.log(`Server start on port ${serverPort}.`);
});
