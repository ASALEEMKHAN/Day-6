// https://medium.com/@reach2arunprakash/guvi-zen-class-find-the-culprits-and-nail-them-9ee6c67c44fb

// GUVI: Zen Class — Part 1: Find the culprits and nail them — debugging javascript

Find the culprit fix.html

<!DOCTYPE html>
<html>
  <body>
    <script>
      alert( “I’m JavaScript!’);
    </script>
    Whats the error in this ?
  </body>
</html>

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script>
      alert("I’m JavaScript!");
    </script>
    Whats the error in this ?
  </body>
</html>

------------------------------------------------------------------------------------------------------------------------------------------------

Find the culprit and invoke the alert

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

scripts.js

alert(“I’m invoked!”);

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

scripts.js

alert("I’m invoked!");

------------------------------------------------------------------------------------------------------------------------------------------------

Explain the below how it works

explain.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

alert("I'm JavaScript!"); // (Ans:- The alert statement in a pop-up of window.)
alert('Hello') // this line is not having semicolon (Ans:- But it is not necessary because JavaScript automatically inserts semicolons at the end of lines.)
alert(`Wor
 ld`) // (Ans:- This is possible because backticks allow for multi-line strings in JavaScript.)
alert(3 +
1
+ 2); // this is multiple line code and its working (Ans:- But it is still valid because JavaScript ignores whitespace characters like line breaks and spaces.)

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the below to alert Guvi geek

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

var admin = 9;
var fname = 10.5;
fname = "Guvi";
var lname = "geek";
admin = fname + " " + lname;
alert(admin); // "Guvi geek"

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the below to alert hello Guvi geek

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

let fname = 10.5;
fname = "Guvi";
lname = "geek";
let name = fname + " " + lname;
alert(`hello ${name}`);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the below to alert sum of two numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

------------------------------------------------------------------------------------------------------------------------------------------------

If you run the below scritpt you will get “Code is Blasted”

Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted");
} else {
  console.log("Diffused");
}

In JavaScript, when you compare two strings using the > operator, it performs a lexicographical (dictionary-style) comparison, character by character. In this case, it compares the characters "2" and "1" from left to right. The character "2" comes after "1" in the Unicode character set, so "2" > "12" evaluates to true. As a result, the if block is executed, and "Code is Blasted" is printed to the console.

------------------------------------------------------------------------------------------------------------------------------------------------

How to get the success in console.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

 it means the user entered a value (including 0), and the message 'OMG it works for any number inc 0' will be printed. If a is null, the "Success" message will be printed.

------------------------------------------------------------------------------------------------------------------------------------------------

How to get the correct score in console.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

let value = prompt("How many runs you scored in this ball");
// Parse the input as an integer
value = parseInt(value);
if (value === 4) {
  console.log("You hit a Four");
} else if (value === 6) {
  console.log("You hit a Six");
} else {
  console.log("I couldn't figure out");
}

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to welcome the Employee

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>

script.js

let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome, Employee' : (login == 'Director') ? 'Greetings, Director' :(login == '') ? 'No login' : 'Unknown';
console.log(message);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

// You cant change the value of the msg
let message;
if (null || 2 || undefined) {
  message = "welcome boss";
} else {
  message = "Go away";
}
console.log(message);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let message;
let lock = 2;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

let message;
let lock;
//Dont change any code below this
if (null || lock || undefined) {
  message = "Go away";
} else {
  message = "welcome";
}
console.log(message);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to welcome the boss

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let message;
let lock = 2;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

let message;
let lock;
//Dont change any code below this
if ((lock && " ") || undefined) {
  message = "Go away";
} else {
  message = "welcome";
}
console.log(message);

------------------------------------------------------------------------------------------------------------------------------------------------

Change the code to print

3

2

1

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

//You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i );
}

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

// You can change only 2 characters
let i = 3;
while (i) {
  console.log(i--);
}

------------------------------------------------------------------------------------------------------------------------------------------------

Change the code to print 1 to 10 in 4 lines

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

for (let num = 1; num <= 10; num++) {
  console.log(num);
}

------------------------------------------------------------------------------------------------------------------------------------------------

Change the code to print even numbers

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {
  console.log(num)
}

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

// You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
    console.log(num);
  }
  
------------------------------------------------------------------------------------------------------------------------------------------------

Change the code to print all the gifts

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log('Wrapped ${'gifts[i]'} and added a bow!');
}

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to disarm the bomb.

fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
script.js

let countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

Ans:-

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>

script.js

let countdown = 100;
while (countdown > 0) {
  countdown--;
}
console.log("Bomb disarmed");

------------------------------------------------------------------------------------------------------------------------------------------------

Whats the msg printed and why?

var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);
Whats the msg printed and why? Guess you answer before running it.

var lemein = “0”;
var lemeout = 0;
var msg = “”;
if (lemein) {
 msg += “hi”;
 }
if (lemeout) {
 msg += ‘Hello’;
}
console.log(msg);

Ans:-

/*
lemein is assigned the string value "0". Since it's a non-empty string, it is considered a truthy value.
lemeout is assigned the number 0. In JavaScript, the number 0 is considered a falsy value.
The first if statement checks if lemein is truthy and appends "hi" to msg. So, msg becomes "hi".
The second if statement checks if lemeout is truthy, but it's not because 0 is falsy, so it doesn't append anything to msg.
So, the code prints "hi" to the console.
*/

script.js

var lemein = "0";
var lemeout = 0;
var msg = "";

if (lemein) {
  msg += "hi";
}

if (lemeout) {
  msg += "Hello";
}

console.log(msg);

------------------------------------------------------------------------------------------------------------------------------------------------

// https://medium.com/@reach2arunprakash/www-guvi-io-zen-4fa483a7d359

// GUVI: Zen Class — Part 2: Find the culprits and nail them — debugging javascript loops

Write a code to print the numbers in the array

Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i--) {
 new_string += numsArr[i] 
}
console.log(new_string);

Ans:-

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to print the numbers in the array

Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;
 
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i] + , 
}
console.log(new_string);

Ans:-

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
  new_string += numsArr[i] + ",";
}
console.log(new_string);

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

Output: 11 10 9 8 7 6 5 4 3 2 1

var new_string = “”;
 
for (var i = 11; i > 0; i — ) {
 new_string += numsArr[i] + “ “ 
}
console.log(new_string);

Ans:-

var new_string = "";

for (var i = 11; i >= 1; i--) {
  new_string += i;
  if (i > 1) {
    new_string += " ";
  }
}

console.log(new_string);

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to replace the array value — If the number is even, replace it with ‘even’.

Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = odd
 }
}
console.log(numsArr);

Ans:-

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 === 0) {
    numsArr[i] = "even";
  }
}

console.log(numsArr);

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to replace the array value — If the index is odd, replace it with ‘even’.

Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = even
 }
}
console.log(numsArr);

Ans:-

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 !== 0) {
    numsArr[i] = "even";
  }
}
console.log(numsArr);

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to add all the numbers in the array

Output: 66

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 var sum;
 sum += numsArr[i]
}
console.log(sum);

Ans:-

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;

for (var i = 0; i <= 10; i++) {
  sum = sum + numsArr[i];
}
console.log(sum);

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to add the even numbers only

Output: 30

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0);
 sum += numsArr[i]
}
console.log(sum);

Ans:-

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < 11; i++) {
  if (numsArr[i] % 2 === 0) {
    sum += numsArr[i];
  }
}
console.log(sum);

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to add the even numbers and subract the odd numbers

Output: 94

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0);
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);

Ans:-

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 !== 0) {
    sum -= numsArr[i];
  } else {
    sum += numsArr[i];
  }
}
console.log(sum);

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to print inner arrays

Output:

Array(5) [ 1, 2, 3, 4, 5 ]
Array(6) [ 6, 7, 8, 9, 10, 11 ]

var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++); {
 console.log( numsArr[i])
}

Ans:-

var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
  console.log(numsArr[i]);
}

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to print elements in the inner arrays

Output: 1234567891011

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
     str_all +=inner_array[j]
}
console.log(str_all);

Ans:-

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = "";

for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];

  for (var j = 0; j < inner_array.length; j++) {
    str_all += inner_array[j];
  }
}

console.log(str_all);

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to replace the array value — If the index is even, replace it with ‘even’.

Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
      if(numsArr[i] %2 == 0 )
      {
         numsArr[i] = even
       }
}
console.log(numsArr);

Ans:-


var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];

for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];

  for (var j = 0; j < inner_array.length; j++) {
    if (j % 2 === 0) {
      inner_array[j] = "even";
    }
  }
}
console.log(numsArr);

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to print elements in the inner arrays in reverse

Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length; j < 0 ;j-- )
     str_all +=inner_array[j]
}
console.log(str_all);

Ans:-

var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
var str_all = "";

for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];

  for (var j = inner_array.length - 1; j >= 0; j--) {
    str_all += inner_array[j] + " ";
  }
}

console.log(str_all.trim());

------------------------------------------------------------------------------------------------------------------------------------------------

Write a code to add elements in the inner arrays based on odd or even values

Output:
36
30

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i]%2!=0)
 {
 sum_odd += numsArr[i]
 }
 else
 {
 sum_even += numsArr[i]
 }
}
}
console.log(sum_odd);
console.log(sum_even);

Ans:-

var numsArr = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10, 11]];
var sum_odd = 0;
var sum_even = 0;

for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];

  for (var j = 0; j < inner_array.length; j++) {
    if (inner_array[j] % 2 !== 0) {
      sum_odd += inner_array[j];
    } else {
      sum_even += inner_array[j];
    }
  }
}

console.log(sum_odd);
console.log(sum_even);

------------------------------------------------------------------------------------------------------------------------------------------------

// https://medium.com/@reach2arunprakash/guvi-zen-simple-debugging-tasks-adcdc2d3249d

// GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript

Fix the code to get the largest of three.

Code:

aa = (f,s,t) => {
 let f,s,t;
 console.log(f,s,t);
 if(f>s &&f>t){
 console.log(f)}
 else if(s>f && s>t){
 console.log(s)}
 else{
 console.log(t)}
}
aa(1,2,3);

Ans:-

aa = (f, s, t) => {
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};
aa(1, 2, 3);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to Sum of the digits present in the number

Code:

let n = 123;
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}

Ans:-

let n = 123;
console.log(add(n));

function add(n) {
  let sum = 0;
  let nStr = n.toString();
  for (var i = 0; i < nStr.length; i++) {
    sum += parseInt(nStr[i]);
  }
  return sum;
}

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to Sum of all numbers using IIFE function

Code:

const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i <= arr.length; i++);{
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

Ans:-

const arr = [9, 8, 5, 6, 4, 3, 2, 1];
(function () {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum;
})();

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to gen Title caps.

Code:

var arr = [“guvi”, “geek”, “zen”, “fullstack”];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano();

Ans:-

var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
};
ano(arr);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to return the Prime numbers

Code:

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);

Ans:-

const newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter((num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
});
console.log(myPrime);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to sum the number in that array

Code:

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const sum = num.reduce(sum)
console.log(sum);

Ans:-

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = (a, b) => a + b;
sum = num.reduce(sum);
console.log(sum);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to rotate an array by k times and return rotated array using IIFE function

Code:

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 arr = {};
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();

Ans:-

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;

(function () {
  k = k % arr.length;
  var out = arr.slice(k).concat(arr.slice(0, k));
  console.log(out);
})();

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to gen Title caps.

Code:

var arr = [“guvi”, “geek”, “zen”, “fullstack”];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
 }
})();

Ans:-

var arr = ["guvi", "geek", "zen", "fullstack"];
(function () {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
})();

------------------------------------------------------------------------------------------------------------------------------------------------

print all odd numbers in an array using IIFE function

Code:

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
 console.log(arr[i]);
 }}
})();

Ans:-

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function () {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})();

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to reverse.

Code:

(function(str){
 str1 = str.split(“ “).reverse().join(“”);
 console.log(str1); 
})(“abcd”)

Ans:-

(function (str) {
  var str1 = str.split("").reverse().join("");
  console.log(str1);
})("abcd");

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to remove duplicates.

Code:

var res = function(arr){
 for(var i=0; i < arr.length; i++){
 newArr = [];
 if(newArr.indexOf(arr[i]) == -1) {
 newArr.push(arr[i]);
 } }
 console.log(newArr)
}
res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”])

Ans:-

var res = function (arr) {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};
res(["guvi", "geek", "guvi", "duplicate", "geeK"]);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to give the below output:

Expected Output:

[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]

Code:

var array =[[[“firstname”,”vasanth”],[“lastname”,”Raje”],[“age”,24],[“role”,”JSWizard”]],[[“firstname”,”Sri”],[“lastname”,”Devi”],[“age”,28],[“role”, “Coder”]]];
var final=[]
while(array.length!=0)
{
 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object)
}

Ans:-

var array = [
  [
    ["firstname", "vasanth"],
    ["lastname", "Raje"],
    ["age", 24],
    ["role", "JSWizard"],
  ],
  [
    ["firstname", "Sri"],
    ["lastname", "Devi"],
    ["age", 28],
    ["role", "Coder"],
  ],
];
var final = [];

while (array.length !== 0) {
  var outer_remove = array.shift();
  var new_object = {};

  while (outer_remove.length !== 0) {
    var inner_remove = outer_remove.shift();
    var key = inner_remove[0];
    var value = inner_remove[1];
    new_object[key] = value;
  }
  final.push(new_object);
}
console.log(final);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to give the below output:

Sum of odd numbers in an array

Code:

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;});
console.log(s);

Ans:-

var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function (a, c) {
  if (c % 2 !== 0) {
    return a + c;
  }
  return a;
}, 0);
console.log(s);

------------------------------------------------------------------------------------------------------------------------------------------------

Fix the code to give the below output:

Swap the odd and even digits

Code:

aa = data=>{
 var a=data;
for(i=0;i<a.length-1;i++){
 var l=’’;
 var s=a[i+1]
 var b=a[i]
 l+=s
 l+=b
 i=i+1
}
if((a.length%2)!=0){
 l+=a[a.length-1]
}
console.log(l);
}
aa(“1234”);

Ans:-

aa = (data) => {
  var a = data;
  var l = "";

  for (i = 0; i < a.length - 1; i += 2) {
    var s = a[i + 1];
    var b = a[i];
    l += s;
    l += b;
  }

  if (a.length % 2 !== 0) {
    l += a[a.length - 1];
  }

  console.log(l);
};

aa("1234");

------------------------------------------------------------------------------------------------------------------------------------------------
