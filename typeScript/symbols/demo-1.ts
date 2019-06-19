// symbol是一种原始数据类型，就像number和string。
// symbol通过调用Symbol构造函数创建值。

let sym1 = Symbol()
let sym2 = Symbol('key')

// 符号是不可变的，也是唯一的。

let sym3 = Symbol("key");
let sym4 = Symbol("key");

sym2 === sym3; // false, symbols are unique

// 就像字符串一样，符号可以用作对象属性的键。
const sym5 = Symbol()
let obj = {
  [sym5]: "value"
}

console.log(obj[sym5])

// 符号还可以与计算属性声明组合以声明对象属性和类成员。

const getClassNameSymbol = Symbol()

class Cs {
  [getClassNameSymbol]() {
    return "c"
  }
}

let cs = new Cs()

let className = cs[getClassNameSymbol]() // c

// Symbol 列表

