let obj = {
  a: 1,
  b: 2,
};

// after preventExtensions.
Object.preventExtensions(obj);

// we can't create obj.
obj.c = 3;
console.log(obj);

delete obj.a;
console.log(obj);
