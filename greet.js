fix/rename_function
const greet = (name = "World") => {
  return `Hello ${name}!`;
}
=======
const helloWorld = (name = "World") => `Hello ${name}!`;
main
