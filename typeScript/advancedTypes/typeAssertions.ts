// 由于可以使用union实现可空类型，因此需要使用类型保护来删除null。幸运的是，这与您在JavaScript中编写的代码相同：
function f1 (sn: string | null): string {
  if (sn == null) {
      return "default";
  }
  else {
      return sn;
  }
}
// ull消除是很明显的在这里，但你可以用更简洁运营商太：
function f2(sn: string | null): string {
  return sn || 'default'
}

