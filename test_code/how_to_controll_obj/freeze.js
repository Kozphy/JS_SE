// Example 1
let obj = {
  a: 1,
  b: 2,
};

// after freeze, we can't change object.
Object.freeze(obj);

obj.a = 100;
delete obj.a;

obj.c = 3;
console.log(obj);
