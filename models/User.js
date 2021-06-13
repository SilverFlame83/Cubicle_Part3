const {Schems, model, Schema} = require('mongoose');

const schema = new Schema({
    username:{type: String, require: true},
    hashedPassword:{type:String, require: true}
});

module.exports = model('User', schema)