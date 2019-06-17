let xfu = () => ({name: "Alice"});
let yfu = () => ({name: "Alice", location: "Seattle"});

xfu = yfu; // OK
// yfu = xfu; // Error, because x() lacks a location property