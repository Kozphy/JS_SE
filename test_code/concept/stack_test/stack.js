function LevelTwo() {
  console.log("Inside Level Two!");
}

function LevelOne() {
  console.log("Before execute LevelTwo!");
  LevelTwo();
  console.log("After Execute LevelTwo!");
}

function main() {
  LevelOne();
}

main();
