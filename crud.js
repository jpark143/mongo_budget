const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/mongodb_demo';

// CRUD = Create - Read - Update - Delete

// 1- connect to database
// 2- perform the desired operation
// 3- close database connection

mongoDBClient.connect(url, { useUnifiedTopology: true }, (operationError, dbHandler)=>{
    if (operationError){
        console.log("An error has occured during the connection process");
    } else {
        console.log("Connected to the database")

        // Insert operation
        let data = {id: 11, name: "added a new name from MongoDB Native Driver"};
        dbHandler.db('mongodb_demo').collection('names').insertOne(data, (operr, opresult)=>{
            if (operr){
                console.log("Unable to insert data into your collection")
                console.log(operr)
            } else {
                console.log("Insert Successfully")
                //dbHandler.close()
            }
        })
        //if dbHandler.close() was here, it will give an error

        // List operation
        // dbHandler.db('mongo_demo').collection('names').find().toArray((operr, opresult)=>{
        //     if (operr){
        //         console.log(operr)
        //     } else {
        //         for (var i = 0; i < opresult.length; i++){
        //             console.log(opresult[i])
        //         }
        //         dbHandler.close()
        //     }
        // });

        // Fetch operation
        // dbHandler.db('mongo_demo').collection('names').findOne({id: 1}, (operr, opresult)=>{
        //     if (operr){
        //         console.log(operr)
        //     } else {
        //         console.log(opresult)
        //         dbHandler.close()
        //     }
        // })

        // Update operation
        // let newData = {$set: {id: 11, name: "added a new name from MongoDB Native Driver"}};
        // dbHandler.db('mongo_demo').collection('names').updateOne({id: 1}, newData, (operr, opresult)=>{
        //     if (operr){
        //         console.log("Unable to insert data into your collection")
        //     }
        //     else {
        //         console.log("Updated Successfully")
        //         dbHandler.close()
        //     }
        // })
        
        // Delete operation
        // dbHandler.db('mongo_demo').collection('names').deleteOne({id: 11}, (operr, opresult)=>{
        //     if (operr){
        //         console.log("Unable to delete data from your collection")
        //     }
        //     else {
        //         console.log("Deleted Successfully")
        //         dbHandler.close()
        //     }
        // })

        // Bulk delete
        // dbHandler.db('mongo_demo').collection('names').deleteMany({id: 10}, (operr, opresult)=>{
        //     if (operr){
        //         console.log("Unable to delete data from your collection")
        //     }
        //     else {
        //         console.log("Deleted Successfully")
        //         dbHandler.close()
        //     }
        // })
    }
});