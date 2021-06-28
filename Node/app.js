const module1 = require('./module1')
const module2 = require('./module2')

module1.fn();
module2.fn();
console.log(`${module1.name}老师的月薪:${module2.salary}`);

