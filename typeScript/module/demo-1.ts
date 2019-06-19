// 可以通过添加export关键字来导出任何声明（例如变量，函数，类，类型别名或接口）。

export interface StringValidator {
  isAcceptable(s: string): boolean
}

export const numberREgexp = /^[0-9]+$/

export class ZipCode implements StringValidator {
  isAcceptable(s: string) {
      return s.length === 5 && numberREgexp.test(s);
  }
}

// or  重命名导出时，导出语句很方便，因此上面的示例可以写成：

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
      return s.length === 5 && numberREgexp.test(s);
  }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };

// 导入

// import { ZipCodeValidator } from "./ZipCodeValidator";

let myValidator = new ZipCodeValidator();

// 也可以重命名导入

// import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
// let myValidator = new ZCV();

