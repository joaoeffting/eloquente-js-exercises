## 1 - Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:
```bash
#
##
###
####
#####
######
#######
```
It may be useful to know that you can find the length of a string by writing .length after it.

var abc = "abc";
console.log(abc.length);
// → 3
Most exercises contain a piece of code that you can modify to solve the exercise. Remember that 
you can click code blocks to edit them.

#### Code:

```javascript
function triangleLoop() {
  let hash = '#';
  for (let i = 1; i <= 7; i++) {
    console.log(hash);
    hash += '#';
  }
}

triangleLoop();
```

## 2 - Fizz Buzz

Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are 
divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage 
of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)

#### Code:

```javascript
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
```

## 3 - Chess board

Write a program that creates a string that represents an 8×8 grid, using newline 
characters to separate lines. At each position of the grid there is either a 
space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:
```bash
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```
When you have a program that generates this pattern, define a variable size = 8 
and change the program so that it works for any size, outputting a grid of 
the given width and height.

#### Code:

```javascript
function getHashBySize(size) {
  let hashSize = '';
  for (let i = 1; i <= size; i++) {
    hashSize += '# ';
  }
  return hashSize;
}

function chessBoard(size) {
  let chessBoard = getHashBySize(size);
    for (let i = 1; i<= size; i++) {
      if (i % 2 == 0) {
        console.log(chessBoard);
      } else {
        console.log(' '+chessBoard);
      }
    }
}

chessBoard(8);
```