function fn() {
    console.log('module2的fn');
}


let obj = {
    name: '张三',
    age: 20
}

let salary='100K';


module.exports = {
    fn,
    obj,
    salary
}
