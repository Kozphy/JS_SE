# var let const

## var declare

```js
// 使用 var 聲明變數
var x = 10;
console.log(x); // 輸出 10
```

## var reassign

```js
// 可以重新賦值
x = 20;
console.log(x); // 輸出 20
```

## let declare

```js
// 使用 let 聲明變數
let y = 5;
console.log(y); // 輸出 5
```

## let reassign

```js
// 可以重新賦值
y = 15;
console.log(y); // 輸出 15
```

## const declare

```js
// 使用 const 聲明變數
const z = 30;
console.log(z); // 輸出 30
```

### const can't reassign

```js
// 不能重新賦值，會拋出錯誤
// z = 40; // 這一行會拋出 TypeError
```

## 使用 var 聲明變數在函數作用域中

```js
// function exampleVar() {
  if (true) {
    var foo = "Hello";
  }
  console.log(foo); // 輸出 'Hello'，因為 foo 在函數作用域中是可見的
}

exampleVar();
```

## 使用 let 聲明變數在塊級作用域中

```js
function exampleLet() {
  if (true) {
    let bar = "Hi";
  }
  // console.log(bar); // 這一行會拋出 ReferenceError，因為 bar 在塊級作用域中不可見
}

exampleLet();
```
