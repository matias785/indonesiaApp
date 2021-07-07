const { Schema, model } = require('mongoose');

const UserSchema = new Schema({ 
    name: String,
    lastName: String,
    email: String,
    password: String,
    position: String
}, {
    timestamps: true
});

module.exports = model('User', UserSchema);