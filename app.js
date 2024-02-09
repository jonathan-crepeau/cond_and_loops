// console.log('Fear is the mind killer.');

// ANCHOR - If Statement Exercises

// SECTION Loop Through Array Exercise

// characters = ["Aang", "Appa", "Momo", "Katara", "Sokka", "Toph"];

// for (let i = 0; i < characters.length; i++) {
//   console.log(characters[i]);
// }


// SECTION Write a for loop that counts from 1 to 10, and logs whether the number is even or odd:

for (let i =0; i < 11; i++) {
  if (i % 2 == 0) {
    console.log('Current number is: ' + i + ' -- the number is even!');
  } else {
    console.log('Current number is: ' + i + ' -- the number is odd.');
  }
}
