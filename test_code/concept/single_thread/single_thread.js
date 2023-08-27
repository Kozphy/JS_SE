console.log("Before delay");

function delaryBySeconds(sec) {
  let start = (now = Date.now());
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}

delaryBySeconds(5);

console.log("After delay");
