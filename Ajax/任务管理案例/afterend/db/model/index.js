const mongo = require('mongoose')
const schema = new mongo.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    isDone: {
        type: String,
        default: 'false'
    },
    createTime: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongo.model('tasklist', schema)