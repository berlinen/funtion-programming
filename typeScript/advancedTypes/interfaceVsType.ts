// 一个区别是接口创建一个在任何地方使用的新名称。类型别名不会创建新名称

type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

// 第二个更重要的区别是类型别名不能扩展或实现（也不能扩展/实现其他类型）因此如果可能，应始终在类型别名上使用接口。

// 另一方面，如果您无法使用接口表达某种形状并且需要使用union或tuple类型，则通常可以使用类型别名

type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here