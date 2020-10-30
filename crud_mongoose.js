const mongoose = require("mongoose")
const namesModel = require("./models/names_schema")

let url = 'mongodb://localhost:27017/mongodb_demo';

mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true})
        .then(()=>{
            console.log("Connected to the database")
            namesModel.find({})
                     .then((data) =>{
                         console.log(data)
                     })
                     .catch((connectionError)=>{
                         console.log(connectionError)
                     })
        })
        .catch((connectionError) => {
            console.log(connectionError)
        })