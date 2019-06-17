// TypeScript中的类型兼容性基于结构子类型。结构类型是一种仅根据其成员关联类型的方式。这与名义打字形成对比。

interface Named {
  name: string
}

class Person {
  name: string
}

let p: Named

p = new Person()