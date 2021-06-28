const mongo = require('mongoose')
let shcemaObj = mongo.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    info: {
        type: mongo.Schema.Types.Mixed,
        default: '...'
    },
    createtime: {
        type: Date,
        default: Date.now()
    }
});

let modelObj = mongo.model('students', shcemaObj)
module.exports = modelObj