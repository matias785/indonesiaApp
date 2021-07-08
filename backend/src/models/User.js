const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: String,
    lastName: String,
    gender: String,
    yearsOld: Number,
    dni: String,    
    adress: String,        
    email: String,
    type: String,
    matter: String,
    password: String    
}, {
    timestamps: true
});


module.exports = model('User', UserSchema);

