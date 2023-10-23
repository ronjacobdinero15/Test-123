function upperCase(string) {
  for (let i = 0; i < string.length; i++) {
    if (i % 2) {
      console.log(string.charAt(i));
    } else {
      console.log(string.charAt(i).toUpperCase());
    }
  }
}

console.log(upperCase("hello"));

// const word = "hello";
// console.log(word.length);

// console.log("hello".charAt(0));
