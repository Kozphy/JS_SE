const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

const allPromise = Promise.all([promise1, promise2, promise3]);

allPromise
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
