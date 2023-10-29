// obj assign 1
let obj = {
  a: 1,
};

let copy = Object.assign({}, obj);

console.log(copy);

// obj assign 2
let obj2 = {
  a: 1,
  b: ["a", "b", "c"],
};

let copy2 = Object.assign({}, obj2);

copy2.b.push("d");
console.log(obj2);
