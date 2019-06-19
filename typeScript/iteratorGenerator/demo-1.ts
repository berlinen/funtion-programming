// iterables
// 如果对象具有Symbol.iterator属性的实现，则该对象被视为可迭代。一些内置的类型，如Array，Map，Set，String，Int32Array，Uint32Array，等有自己的Symbol.iterator属性已经实施。 Symbol.iterator对象上的函数负责返回值列表以进行迭代

// for ... of
// for..of循环遍历可迭代对象，调用Symbol.iterator对象上的属性。这是一个for..of关于数组的简单循环：

let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

// for..of与for..in陈述＃

// for..of与for..in陈述＃

// 两个for..of和for..in语句都遍历列表; 迭代的值虽然不同，但for..in返回正在迭代的对象上的键列表，而for..of返回正在迭代的对象的数值属性的值列表。

let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}

// 另一个区别是for..in对任何物体进行操作; 它用作检查此对象的属性的方法。 for..of另一方面，主要是对可迭代对象的值感兴趣。内置对象喜欢Map并Set实现Symbol.iterator允许访问存储值的属性。

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
   console.log(pet); // "species"
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}

