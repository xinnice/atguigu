const mongo = require('mongoose')
const schema = new mongo.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createtime: {
        type: Date,
        default: Date.now()
    }
})
const model = mongo.model('stu', schema)
module.exports = model