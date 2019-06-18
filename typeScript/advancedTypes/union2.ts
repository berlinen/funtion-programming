// 如果我们有一个具有union类型的值，我们只能访问union中所有类型共有的成员。

interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPat(): Fish | Bird {
  //
  return
}

let pet = getSmallPat()
// pet.layEggs(); // okay
// pet.swim();    // errors

// if (pet.swim) {
//   pet.swim();
// }
// else if (pet.fly) {
//   pet.fly();
// }

if((<Fish>pet).swim) {
  (<Fish>pet).swim()
} else {
  (<Bird>pet).fly();
}

// 用户定义的类型防护

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

// pet is Fish在这个例子中是我们的类型谓词。谓词采用形式parameterName is Type，其中parameterName必须是当前函数签名中参数的名称。

// 任何时候isFish都使用某个变量调用，如果原始类型兼容，TypeScript会将该变量缩小到该特定类型。

if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}