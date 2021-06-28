 (async () => {
     try {

         const mongo = require('mongoose')
         await mongo.connect('mongodb://127.0.0.1:27017/web0323', {
             useNewUrlParser: true,
             useUnifiedTopology: true
         })
         console.log('数据库连接成功')

         //创建约束
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

         //创建集合
         let modelObj = mongo.model('students', shcemaObj);

         //新增数据
         /* modelObj.create({
             username: '王五',
             age: 30,
             gender: '男'
         }, (err, data) => {
             console.log(err, data)
         }); */

         //查找数据
         /*  modelObj.find((err, data) => {
              console.log(err, data)
          })
          modelObj.findOne({
              age: 18
          }, (err, data) => {
              console.log(err, data)
          }) */

         //更新数据
         /*  modelObj.updateOne({
              $set: {
                  info: '成年'
              }
          },(err,data)=>{
             console.log(err,data)
          }) */
         /* modelObj.updateMany({
             $set: {
                 info: '成年人',
                 createtime:Date.now()
             }
         }, (err, data) => {
             console.log(err, data)
         }) */

         //删除数据
         /* modelObj.remove({
             age: {
                 $lt: 18
             }
         }, (err, data) => {
             console.log(err, data)
         }) */

         let promiseObj = modelObj.find()
         console.log(promiseObj.then(()=>{
             console.log('成功');
         }));

     } catch (err) {
         console.log(err);
     }
 })()