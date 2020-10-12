# Rando.js, Version: 2.0.3
[![Rando.js: The world's easiest, most powerful random function.](https://randojs.com/images/npm-splash.png)](https://github.com/nastyox/Rando.js) 

## What's all the hullabaloo?
  
[Rando.js](https://github.com/nastyox/Rando.js) helps JavaScript developers code 
randomness more simply, readably, and securely. Whether you need to find a random 
int/float between two numbers, pick a random value from an array, choose a random element 
from your jQuery object, grab a character from a string, toss a coin, or do anything of 
the like while even preventing repetitions, we've got you covered at a cryptographically 
strong level. The best part? Our library is extremely lightweight and developer friendly- 
which means it won't take a toll on your project, and it's uber-simple to implement.
  
  
## Usage
  
```javascript
//Install:
npm i @nastyox/rando.js
    
//Then, paste this in your JavaScript file:
const randojs = require('@nastyox/rando.js'), rando = randojs.rando, randoSequence = randojs.randoSequence;
```
  
  
## Examples
  
```javascript
rando()                       //a floating-point number between 0 and 1 (could be exactly 0, but never exactly 1)  
rando(5)                      //an integer between 0 and 5 (could be 0 or 5)  
rando(5, 10)                  //a random integer between 5 and 10 (could be 5 or 10)  
rando(5, "float")             //a floating-point number between 0 and 5 (could be exactly 0, but never exactly 5)  
rando(5, 10, "float")         //a floating-point number between 5 and 10 (could be exactly 5, but never exactly 10)  
rando(true, false)            //either true or false  
rando(["a", "b"])             //{index:..., value:...} object representing a value of the provided array OR false if array is empty  
rando({a: 1, b: 2})           //{key:..., value:...} object representing a property of the provided object OR false if object has no properties  
rando($("div"))               //{index:..., value:...} object representing a jQuery element from the provided jQuery element set OR false if the provided jQuery element set does not contain any elements.  
rando("Gee willikers!")       //a character from the provided string OR false if the string is empty. Reoccurring characters will naturally form a more likely return value  
rando(null)                   //ANY invalid arguments return false
```
  
### --> Prevent repetitions by grabbing a sequence and looping through it
  
```javascript
randoSequence(5)              //an array of integers from 0 through 5 in random order  
randoSequence(5, 10)          //an array of integers from 5 through 10 in random order  
randoSequence(["a", "b"])     //an array of {index:..., value:...} objects representing the values of the provided array in random order  
randoSequence({a: 1, b: 2})   //an array of {key:..., value:...} objects representing the properties of the provided object in random order  
randoSequence($("div"))       //an array of {index:..., value:...} objects representing all jQuery elements from the provided jQuery element set in random order.  
randoSequence("Good gravy!")  //an array of the characters of the provided string in random order  
randoSequence(null)           //ANY invalid arguments return false
```