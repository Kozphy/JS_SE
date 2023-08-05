window.onload = function () {
  let aBtn = document.getElementsByTagName("input");
  for (let i = 0; i < aBtn.length; i++) {
    (function (i) {
      aBtn[i].onclick = function () {
        alert(i);
      };
    })(i);
  }
};

// window.onload = function () {
//   let aBtn = document.getElementsByTagName("input");
//   for (let i = 0; i < aBtn.length; i++) {
//     aBtn[i].onclick = function () {
//       alert(i);
//     };
//   }
// };
