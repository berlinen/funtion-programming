// 上下文打字
// 在TypeScript中，类型推断在某些情况下也适用于“另一个方向”。这被称为“上下文打字”。
window.onmousedown = function(uiElement) {
  console.log(uiElement.button) // => ok
  // console.log(uiElement.kangaroo) // => Error
}

// --------------------

window.onscroll = function(e) {
  // console.log(e.button) // =>error
}

// any

window.onscroll = function(uiEvent: any) {
  console.log(uiEvent.button);  //<- Now, no error is given
};

