// 就像接口一样，类型别名也可以是通用的 - 我们只需添加类型参数并在别名声明的右侧使用它们：
type Container<T> = { value: T };
// 我们还可以在属性中使用类型别名引用自身：
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>
}

// 与交集类型一起，我们可以制作一些非常令人惊讶的类型：

type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;

// 类型别名不可能出现在声明右侧的任何其他位置：

// type Yikes = Array<Yikes>; // error
