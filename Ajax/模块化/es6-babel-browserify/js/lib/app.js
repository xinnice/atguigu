'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_module.myname);
(0, _module.fm1)();

console.log(_module2.myname);
(0, _module2.fm2)();

console.log(_module4.default.myname);
_module4.default.fm3();

console.log(_module5.myname);
(0, _module5.fm4)();
console.log(_module6.default.firstname);