namespace Validation {
  export interface StringValidator {
      isAcceptable(s: string): boolean;
  }

  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  export class LettersOnlyValidator implements StringValidator {
      isAcceptable(s: string) {
          return lettersRegexp.test(s);
      }
  }

  export class ZipCodeValidator implements StringValidator {
      isAcceptable(s: string) {
          return s.length === 5 && numberRegexp.test(s);
      }
  }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
      console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
  }
}


// 在这里，我们将Validation在多个文件中拆分命名空间。尽管这些文件是分开的，但它们每个都可以贡献给相同的命名空间，
// 并且可以像在一个地方定义它们一样使用它们。因为文件之间存在依赖关系，我们将添加引用标记以告诉编译器文件之间的关系。我们的测试代码没有变化。

namespace Validation {
  export interface StringValidator {
      isAcceptable(s: string): boolean;
  }
}


//namespace Validation {
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidators implements StringValidator {
      isAcceptable(s: string) {
          return lettersRegexp.test(s);
      }
  }
}

