(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//分别导出
var myname = exports.myname = 'moudule1';
var fm1 = exports.fm1 = function fm1() {
    console.log('func:module1');
};
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var myname = 'module2';
var fm2 = function fm2() {
    console.log('func:module2');
};
exports.myname = myname;
exports.fm2 = fm2;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var myname = 'module3';
var fm3 = function fm3() {
    console.log('func:module3');
};

exports.default = {
    myname: myname,
    fm3: fm3
};
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fm4 = function fm4() {
    console.log('func:module4');
};

var myname = exports.myname = 'module4';
exports.fm4 = fm4;
exports.default = {
    firstname: '模块4'
};
},{}]},{},[1]);
