<div style="padding:20px;">
  <div style="text-align:center;padding-bottom:20px;border-bottom:1px solid #eee;">
    <h1>Rando.js</h1>
    <p>The world's easiest, most powerful random function.</p>
    <img src="http://randojs.com/images/smallsize.png" style="height:20px;"/>
  </div>
  <h2 style="padding:20px;margin:0px;border-bottom:1px solid #eee;">V. 1.0.0</h2>
  <div style="padding:20px;">
    <h3>Explanation</h3>
    <div style="padding-left:0px">
      <p><a href="https://randojs.com" style="color:#ff6666;">Rando.js</a> helps JavaScript developers code randomness more simply and readably. Whether you need to find a random int/float between two numbers, pick a random value from an array, choose a random element from your jQuery object, grab a character from a string, toss a coin, or do anything of the like while even preventing repetitions, we've got you covered. The best part? Our commands are extermely lightweight and developer friendly- which means it won't take a toll on your project, and it's uber-simple to implement.</p>
    </div>
    <h3 style="padding-top:20px;">How to use</h3>
    <div style="padding-left:20px">
      <p><strong>Step 1:</strong> Paste the following script tag into the head of your HTML document:</p>
      <span style="background:#f3f3f3;padding:5px;border-radius:4px;color:#444;">&lt;script src="https://randojs.com/1.0.0.js"&gt;&lt;/script&gt;</span>
      <p style="padding-top:20px;"><strong>Step 2:</strong> Use any of the commands explained at <a href="https://randojs.com" style="color:#ff6666;">https://randojs.com/</a> in the document's JavaScript.</p>
    </div>
    <hr style="border:0px;border-top:1px solid #eee;margin:40px 0px;"/>
    <h3>Examples</h3>
    <div style="padding-left:20px">
      <div>rando()</div>
      <div style="color:#999;padding-top:5px;">// a floating-point number between 0 and 1 (could be exactly 0, but never exactly 1)</div>
      <div style="padding-top:20px">rando(5)</div>
      <div style="color:#999;padding-top:5px;">// an integer between 0 and 5 (could be 0 or 5)</div>
      <div style="padding-top:20px">rando(5, 10)</div>
      <div style="color:#999;padding-top:5px;">// a random integer between 5 and 10 (could be 5 or 10)</div>
      <div style="padding-top:20px">rando(5, "float")</div>
      <div style="color:#999;padding-top:5px;">// a floating-point number between 0 and 5 (could be exactly 0, but never exactly 5)</div>
      <div style="padding-top:20px">rando(5, 10, "float")</div>
      <div style="color:#999;padding-top:5px;">// a floating-point number between 5 and 10 (could be exactly 5, but never exactly 10)</div>
      <div style="padding-top:20px">rando(true, false)</div>
      <div style="color:#999;padding-top:5px;">// either true or false</div>
      <div style="padding-top:20px">rando(["duck", "duck", "goose"])</div>
      <div style="color:#999;padding-top:5px;">// {index:..., value:...} object representing a value of the provided array OR false if array is empty</div>
      <div style="padding-top:20px">rando({name: "Chuck Norris", roundhouse: true, age: "functionally immortal"})</div>
      <div style="color:#999;padding-top:5px;">// {key:..., value:...} object representing a property of the provided object OR false if object has no properties</div>
      <div style="padding-top:20px">rando($("div"))</div>
      <div style="color:#999;padding-top:5px;">// {index:..., value:...} object representing a jQuery element from the provided jQuery element set OR false if the provided jQuery element set does not contain any elements</div>
      <div style="padding-top:20px">rando("gee willikers!")</div>
      <div style="color:#999;padding-top:5px;">// a character from the provided string OR false if the string is empty. Reoccurring characters will naturally form a more likely return value</div>
      <div style="padding-top:20px">rando(null)</div>
      <div style="color:#999;padding-top:5px;">// ANY invalid arguments return false</div>
    </div>
    <h4 style="padding:40px 0px 0px 0px;margin:0px;">&#8674; Prevent repetitions by grabbing a sequence and looping through it</h4>
    <div style="padding-left:20px">
      <div style="padding-top:20px">randoSequence(5)</div>
      <div style="color:#999;padding-top:5px;">//a random integer between 5 and 10 (could be 5 or 10)</div>
      <div style="padding-top:20px">randoSequence(5, 10)</div>
      <div style="color:#999;padding-top:5px;">// an array of integers from 5 through 10 in random order</div>
      <div style="padding-top:20px">randoSequence(["eeny", "meeny", "miny", "moe"])</div>
      <div style="color:#999;padding-top:5px;">// array of {index:..., value:...} objects representing the values of the provided array in random order</div>
      <div style="padding-top:20px">randoSequence({species: "mouse", blind: true, count: 3})</div>
      <div style="color:#999;padding-top:5px;">// array of {key:..., value:...} objects representing the properties of the provided object in random order</div>
      <div style="padding-top:20px">randoSequence($("input"))</div>
      <div style="color:#999;padding-top:5px;">// array of {index:..., value:...} objects representing a jQuery elements from the provided jQuery element set in random order</div>
      <div style="padding-top:20px">randoSequence("Good gravy!")</div>
      <div style="color:#999;padding-top:5px;">// the characters of the provided string in random order</div>
      <div style="padding-top:20px">randoSequence(null)</div>
      <div style="color:#999;padding-top:5px;">// ANY invalid arguments return false</div>
    </div>
  </div>
</div>
