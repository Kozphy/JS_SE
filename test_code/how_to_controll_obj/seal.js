let obj = {
  a: 1,
  b: 2,
};

// seal
Object.seal(obj);

obj.c = 3;
console.log(obj);

// after seal, we can't delete obj.
delete obj.a;

console.log(obj);
