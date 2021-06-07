function Func() {}

var funcObj = new Func();

funcObj.__proto__ === Func.prototype

Func.__proto__ === Function.prototype

Function.__proto__ === Function.prototype

Function.prototype.__proto__ === Object.prototype

Object.prototype.__proto__ === null
