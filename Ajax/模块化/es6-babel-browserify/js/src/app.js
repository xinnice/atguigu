import {
    myname,
    fm1
} from './module1'

import {
    myname as myname2,
    fm2
} from './module2'

import obj from './module3'

import oj, {
    myname as myname4,
    fm4
} from './module4'

console.log(myname)
fm1()

console.log(myname2)
fm2()

console.log(obj.myname)
obj.fm3()

console.log(myname4)
fm4()
console.log(oj.firstname)