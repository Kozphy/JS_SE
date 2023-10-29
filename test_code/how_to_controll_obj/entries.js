const object = {
  a: "something",
  b: 42,
};

// convert object to literal object
for (let [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
}
