// 多态this类型表示一种类型，它是包含类或接口的子类型。

class BasicCalculator {
  public constructor(protected value: number = 0) { }
  public currentValue(): number {
      return this.value;
  }
  public add(operand: number): this {
      this.value += operand;
      return this;
  }
  public multiply(operand: number): this {
      this.value *= operand;
      return this;
  }
  // ... other operations go here ...
}

let v = new BasicCalculator(2)
          .multiply(5)
          .add(1)
          .currentValue();