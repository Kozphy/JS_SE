var myName = "123";

var family = {
  myName: "456",
};

function fn(para1, para2) {
  console.log(this, typeof this, para1, para2);
}

console.log("----------------");
// this = window
fn(1, 2);

console.log("----------------");
// call, this = family
fn.call(family, 1, 2);

console.log("----------------");
// apply, this = family, 使用陣列傳入
fn.apply(family, [3, 4]);

console.log("----------------");
// family, this = family
let fn2 = fn.bind(family, "Ming");
fn2(1);

console.log("----------------");

// advanced concept
fn.call(1, "ming", "JaLon");
fn.call("text", "Ming", "JaLon");
fn.call(undefined);

(function () {
  "use strict";
  let a = "Ming";
})();
