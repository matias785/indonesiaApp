const { Schema, moldels } = require('mongoose');

const techerSchema =  new Schema({
    "name" : String,
    "lastName" : String,
    "email" : String,
    "edad" : Number,
    "matter" : String,
    "adress" : String,
    "dni" : Number
})