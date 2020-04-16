const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
    location: {type: String, required: true},
    landmark: {type: String},
    viewpoint: {type: String},
    photospot: {type: String},
    cafe: {type: String},
});

const Trip = mongoose.model('Trip', tripSchema);



module.exports = {Trip};