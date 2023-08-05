# object, Map and WeakMap

## object

- 無序
- 繼承特性

```js
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(person.name); // Output: 'John'
console.log(person.age); // Output: 30
```

## Map

- ES6 後才有
- `有序`

### method

- `set()`, `get()` , `has()`, `delete()`, `clear()`。
- 不會發生 implicit convert.

```js
const map = new Map();

map.set("name", "John");
map.set(1, "One");

let keyObject = { key: "value" };
map.set(keyObject, "Object");

console.log("-----------------------------");
const map2 = new Map();

const keyObject2 = { key: "value" };
map.set(keyObject2, "Object");

const value = map.get({ key: "value" });

console.log(map.get("name")); // Output: 'John'
console.log(map.get(1)); // Output: 'One'
console.log(map.get(keyObject)); // Output: "Object"
console.log(value); // Output: undefined, because this is a different object reference
```

## WeakMap

```js

```
