const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

let me = Object.create(person);

me.name = "Matthew";
me.isHuman = true;

me.printIntroduction();
