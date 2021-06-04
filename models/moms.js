const mongoose = require('mongoose');
const Schema = mongoose.Schema

const momsSchema = new mongoose.Schema ({
   img: {type: String, required: false},
   title: {type: String, required: false},
   author: {type: String, required: false},
   blog: {type: String, required: false},
})

const Moms = mongoose.model('Moms', momsSchema);

module.exports = Moms
