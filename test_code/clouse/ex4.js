function buildFunctions() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

let fs = buildFunctions();

for (const e of fs) {
  e();
}
