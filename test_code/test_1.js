for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

console.log("----------------");
console.log("\t");

for (var i = 0; i < 5; i++) {
  (function (index) {
    setTimeout(() => {
      console.log(index);
    }, 1000);
  })(i);
}
