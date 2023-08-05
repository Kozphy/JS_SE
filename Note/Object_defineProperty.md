# Object.defineProperty

- 屬性，調整屬性的特徵
- 值、可否寫入、可否刪除、可否被列舉
- Object.defineProperty(物件, 屬性, 參數)

```js
// 如果沒有用 use strict 是靜默得錯誤
Object.defineProperty(person, {
  a: {
    value: 4,
    writable: true,
    configurable: true,
    enumerable: true,
  },
  b: {},
});
```
