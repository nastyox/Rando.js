<h1 align="center">Rando.js</h1>
<p align="center">The world's easiest, most powerful random function.</p>

<p align="center"><img src="http://randojs.com/images/smallsize.png" height="20"/></p>

## :hear_no_evil: What's all the hullabaloo?  
[Rando.js](https://randojs.com) helps JavaScript developers code randomness more simply and readably. Whether you need to find a random int/float between two numbers, pick a random value from an array, choose a random element from your jQuery object, grab a character from a string, toss a coin, or do anything of the like while even preventing repetitions, we've got you covered. The best part? Our commands are extermely lightweight and developer friendly- which means it won't take a toll on your project, and it's uber-simple to implement.  
  
## :zap: Fast implementation  
   **Step 1:** Paste the following script tag into the head of your HTML document:<br/>```<script src="https://randojs.com/1.0.0.js"></script>```  

   **Step 2:** Use any of the commands explained at [https://randojs.com/](https://randojs.com)</a> in the document's JavaScript as you like.  
  
 
  
## :tada: Examples  
  ```
   rando()  
   // a floating-point number between 0 and 1 (could be exactly 0, but never exactly 1)  
     
   rando(5)  
   // an integer between 0 and 5 (could be 0 or 5)  
     
   rando(5, 10)  
   // a random integer between 5 and 10 (could be 5 or 10)  
     
   rando(5, "float")  
   // a floating-point number between 0 and 5 (could be exactly 0, but never exactly 5)  
     
   rando(5, 10, "float")  
   // a floating-point number between 5 and 10 (could be exactly 5, but never exactly 10)  
     
   rando(true, false)  
   // either true or false  
     
   rando(["duck", "duck", "goose"])  
   // {index:..., value:...} object representing a value of the provided array OR false if array is empty  
     
   rando({name: "Chuck Norris", roundhouse: true, age: "functionally immortal"})  
   // {key:..., value:...} object representing a property of the provided object OR false if object has no properties  
     
   rando($("div"))  
   // {index:..., value:...} object representing a jQuery element from the provided jQuery element set OR false if the provided jQuery element set does not contain any elements  
     
   rando("gee willikers!")  
   // a character from the provided string OR false if the string is empty. Reoccurring characters will naturally form a more likely return value  
     
   rando(null)  
   // ANY invalid arguments return false  
  ```
  
### &#8674; Prevent repetitions by grabbing a sequence and looping through it  
  ```
   randoSequence(5)  
   //a random integer between 5 and 10 (could be 5 or 10)  
     
   randoSequence(5, 10)  
   // an array of integers from 5 through 10 in random order  
     
   randoSequence(["eeny", "meeny", "miny", "moe"])  
   // array of {index:..., value:...} objects representing the values of the provided array in random order  
     
   randoSequence({species: "mouse", blind: true, count: 3})  
   // array of {key:..., value:...} objects representing the properties of the provided object in random order  
     
   randoSequence($("input"))  
   // array of {index:..., value:...} objects representing a jQuery elements from the provided jQuery element set in random order  
     
   randoSequence("Good gravy!")  
   // the characters of the provided string in random order  
     
   randoSequence(null)  
   // ANY invalid arguments return false
```
