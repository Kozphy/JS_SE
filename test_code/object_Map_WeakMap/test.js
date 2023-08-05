const map = new Map();

map.set("name", "John");
map.set(1, "One");

let keyObject = { key: "value" };
map.set(keyObject, "Object");

console.log(map.get("name")); // Output: 'John'
console.log(map.get(1)); // Output: 'One'
console.log(map.get(keyObject)); // Output: "Object"

console.log("--------------------------");
const map2 = new Map();

const keyObject2 = { key: "value" };
map.set(keyObject2, "Object");

const value = map.get({ key: "value" });
console.log(value); // Output: undefined, because this is a different object reference
