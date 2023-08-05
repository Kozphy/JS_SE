function greet(w) {
  return function (name) {
    console.log(w + "" + name);
  };
}

let sayHi = greet("Hi");
sayHi("Tony");
