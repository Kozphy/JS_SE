# hoisting

## var hoisting

```js
console.log(x); // undefined
var x = 5;

// 等效于以下代码：
var x;
console.log(x); // undefined
x = 5;
```

## let will not hoisting

```js
console.log(y); // ReferenceError: y is not defined
let y = 10;
```

## function hoisting

```js
foo(); // "Hello"

function foo() {
  console.log("Hello");
}

// 等效于以下代码：

function foo() {
  console.log("Hello");
}

foo(); // "Hello"
```
