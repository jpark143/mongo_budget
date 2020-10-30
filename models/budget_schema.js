const mongoose = require("mongoose")

const budgetSchema = new mongoose.Schema({
    title: String,
    budget: Number,
    color: String
}, { collection: 'budget'})

module.exports = mongoose.model('budget', budgetSchema)