# 閉包

- garbage collection
- 底層:棧
- 高層:函數當作對象處理
- 內層有使用到外層變數，外層變數不會丟棄，會保留直到內層執行完畢

## example 1

```js
function show() {
  let a = 12;
  document.onclick = function () {
    alert(a);
  };
}

show();
```

## example 2

```js
window.onload = function (){
	var aBtn = document.getElementsByTagName('input');

	for(var i = 0;i<aBtn.length; i++) {
		(function (i){
			aBtn[i].onclick = function() {
				alert(i);
			};
		})(i);
	}
}


<input type="button" value="aaa">
<input type="button" value="bbb">
<input type="button" value="ccc">
```

## example 3

```js
function greet(whattosay) {
  return function (name) {
    console.log(whattosay + "" + name);
  };
}

var sayHi = greet("Hi");
sayHi("Tony");
```

## example4

```js
function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();
```

## example 5

```js
function buildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }

  return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();
```
