//Check if a number is divisible by three
function isDivisibleByThree(number) {
  return number % 3 == 0;
}

//Check if a number is divisible by five
function isDivisibleByFive(number) {
  return number % 5 == 0;
}

//Check if a number is divisible by three and five
function isDivisibleByThreeAndFive(number) {
  return isDivisibleByThree(number) && isDivisibleByFive(number);
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (isDivisibleByThreeAndFive(i)) {
      console.log('FizzBuzz');
    } else if (isDivisibleByThree(i)) {
      console.log('Fizz');
    } else if (isDivisibleByFive(i)) {
      console.log('Buzz');
    }
  }
}

fizzBuzz();