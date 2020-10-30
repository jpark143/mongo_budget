const mongoose = require("mongoose")

// validate it is number
// validate if the value has been passed
//find by id --> document then the id is found else --> may use this id

const nameSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
        uppercase: true
    }
}, { collection: 'names'})

module.exports = mongoose.model('names', nameSchema)