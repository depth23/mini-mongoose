var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: { type: String, maxLength: 80 },
    country: { type: String },
    degree: { type: String },
    birth_year: { type: Number }
})

module.exports = mongoose.model('Author', schema);