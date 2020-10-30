const express = require('express');
const { mongo } = require('mongoose');
const mongoose = required('mongoose');
const budgetModel = require('./models/budget_schema.js')

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017/personal-budget';

app.use('/pb/', express.static('public'));
app.use(express.json());


//app.get('/hello', (req, res) => {
//    res.send('Hello World!');
//});

app.get('/pb/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true})
            .then(()=>{
                budgetModel.find({})
                           .then((data) => {
                               res.json(data)
                               mongoose.connection.close()
                           })
                           .catch((connectionError) => {
                               console.log(connectionError)
                           })
            })
            .catch((connectionError) => {
                console.log(connectionError)
            })
});

app.post('/pb/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true})
            .then(()=>{
                var budgetItem = new budgetModel({
                    title: req.body.title,
                    budget: req.body.budget,
                    color: req.body.color
                })

            budgetModel.insertMany(budgetItem)
                       .then((data) => {
                           res.json(data)
                           mongoose.connection.close()
                       })
                       .catch((connectionError) => {
                           console.log(connectionError)
                       })
            })
            .catch((connectionError) => {
                console.log(connectionError)
            })
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}/pb`)
});