let person = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(person);

Object.defineProperty(person, "a", {
  value: 4,
  writable: true,
  configurable: true,
  enumerable: true,
});

console.log(person);
