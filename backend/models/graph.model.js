const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const graphSchema = new Schema({
    username: { type: String, required: true },
    type:{type: Number, required:true},
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
 
}, 
);

const Graph = mongoose.model('Graph', graphSchema);

module.exports = Graph;
