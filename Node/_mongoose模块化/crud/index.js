(async () => {
    const db = require('../db')
    await db
    console.log(222);
    const modelObj = require('../model')
    /* modelObj.create({
        username: '王八',
        gender: '女',
        age: 28
    }) */
    modelObj.updateOne({username:'王八'},{$set:{age:10}},()=>{})
})()