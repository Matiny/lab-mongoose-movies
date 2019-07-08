const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema({
    name: {type: String, required: true},
    occupation: {type: String, required: true},
    catchphrase: {type: String, required: true},
});

const Celebrity = mongoose.model('Celeb', celebSchema);


module.exports = Celebrity;
