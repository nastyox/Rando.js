<p align="center"><a href="#nastyox"><img src="http://randojs.com/images/shapeShifterGray.gif" alt="Gray shape shifter" height="60"/></a></p>
<h1 align="center">Rando.js</h1>
<p align="center">The world's easiest, most powerful random function.</p>

<p align="center">
	<a href="#nastyox"><img src="http://randojs.com/images/2.3kb-shield.png" height="20"/></a>
    <a href="https://twitter.com/intent/tweet?text=Ditch%20all%20that%20convoluted%20%22Math.random()%22%20code.%20Rando.js%20makes%20picking%20a%20number%201-100%20as%20simple%20as%20%22rando(1,%20100)%22,%20and%20it%20can%20do%20way%20more%20just%20as%20easily-%20at%20a%20cryptographically%20strong%20level.&url=https://github.com/nastyox/Rando.js&hashtags=javascript,opensource,js,webdev,developers"><img src="http://randojs.com/images/tweetShield.svg" alt="Tweet" height="20"/></a>
</p><br/><br/>

<p align="center"><a href="#nastyox"><img src="http://randojs.com/images/2.0.0-20fps.gif" width="100%"/></a><a href="#nastyox"><img src="http://randojs.com/images/dropShadow.png" width="100%"/></a></p><br/>

## :hear_no_evil:  What's all the hullabaloo?  
<a href="https://randojs.com" target="_blank">Rando.js</a> helps JavaScript developers code randomness more simply, readably, and securely. Whether you need to find a random int/float between two numbers, pick a random value from an array, choose a random element from your jQuery object, grab a character from a string, toss a coin, or do anything of the like while even preventing repetitions, we've got you covered at a **cryptographically strong** level. The best part? Our library is extremely lightweight and developer friendly- which means it won't take a toll on your project, and it's uber-simple to implement.  <br/><br/><br/>



## :zap:  Fast implementation  
   **Step 1:** Paste the following script tag into the head of your HTML document:<br/>
  ```JavaScript
<script src="https://randojs.com/2.0.0.js"></script>
  ```  
   **Step 2:** Use any of the commands explained at <a href="https://randojs.com" target="_blank">https://randojs.com/</a> however you like.  <br/><br/><br/>
  
  
  
## :tada:  Examples  
  ```JavaScript
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
  
### &#8674; Prevent repetitions by grabbing a sequence and looping through it  
  ```JavaScript
   randoSequence(5)              //an array of integers from 0 through 5 in random order  
   randoSequence(5, 10)          //an array of integers from 5 through 10 in random order  
   randoSequence(["a", "b"])     //an array of {index:..., value:...} objects representing the values of the provided array in random order  
   randoSequence({a: 1, b: 2})   //an array of {key:..., value:...} objects representing the properties of the provided object in random order  
   randoSequence($("div"))       //an array of {index:..., value:...} objects representing all jQuery elements from the provided jQuery element set in random order.   
   randoSequence("Good gravy!")  //an array of the characters of the provided string in random order  
   randoSequence(null)           //ANY invalid arguments return false
```
<br/>
<p align="center"><a href="#nastyox"><img src="http://randojs.com/images/barsSmall.gif" alt="Animated footer bars" width="100%"/></a></p>
<p align="center"><a href="#"><img src="http://randojs.com/images/backToTopButton.png" alt="Back to top" height="29"/></a></p>
