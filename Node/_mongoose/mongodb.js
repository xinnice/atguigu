// db.stu.insertOne({name:'餐餐',age:18})
// db.stu.insertMany([{name:'老罗',age:28},{name:'海静',age:38},{name:'沛华',age:48},{name:'猫猫',age:58}])
db.stu.find({age:{$lte: 18}})
db.stu.find({age:{$in:[18,28]}})
db.stu.find({$or:[{age:38},{age:48},{name:/^老/}]})
db.stu.find({$where: function(){
    return this.age>=28
}})
db.stu.find({age:{$ne:58}})
db.stu.find({name:/^猫/})

db.stu.find()
db.stu.update({age:20},{$set:{name:"餐餐"}})
db.stu.update({name:"餐餐"},{$set:{name:'灿灿',age:30}})
db.stu.update({name:/罗$/},{$set:{age:35}})
db.stu.update({age:{$gt:35}},{$set:{name:'超龄'}},{multi:true})

db.stu.remove({name:'超龄'})