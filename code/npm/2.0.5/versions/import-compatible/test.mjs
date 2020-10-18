console.log("\nNOTE: This test sources in Rando.js using an \"import\" statement. If this is a mistake, and you plan to use Node.js' standard \"require\" function instead, execute this command for testing:\nnpm run test\n\nTEST RESULTS:");

var tests = 0;
var passed = 0;

//--------------------------------
//REQUIRES
//--------------------------------

import {rando, randoSequence} from '@nastyox/rando.js';

console.warn("Notice: jQuery does not support imports, so Rando.js cannot be tested for compatibility with jQuery when imported.");

try{
	//--------------------------------
	//FUNCTIONS
	//--------------------------------
	
	function isArray(arr){
		return typeof arr !== "undefined" && arr !== null && arr.constructor === Array;
	}
	
	function arraysMatch(arr1, arr2){
		if(arr1.length !== arr2.length) return false;
		for(var i = 0; i < arr1.length; i++) if(arr1[i] !== arr2[i]) return false;
		return true;
	}
	
	function sortAndStringifyObjectsInArray(arr){
		for(var i = 0; i < arr.length; i++){
			var obj = arr[i], strs = [];
			for(var prop in obj) if(Object.prototype.hasOwnProperty.call(obj, prop)) strs[strs.length] = prop + ":" + obj[prop];
			arr[i] = strs.sort().join(";");
		}
		return arr.sort();
	}
	
	function test(failed, failCall, failedResult){
		if(failed) console.error("FAILURE: " + failCall + " failed by returning: ", failedResult);
		else passed++;
	}
	
	
	
	//--------------------------------
	//TESTS
	//--------------------------------
	
	tests++;
	var result = rando();
	//EXPECTED: a floating-point number between 0 and 1 (could be exactly 0, but never exactly 1)
	test(typeof result !== "number" || result < 0 || result >= 1, "rando()", result);
	
	tests++;
	result = rando(5);
	//EXPECTED: an integer between 0 and 5 (could be 0 or 5)
	test(typeof result !== "number" || result % 1 !== 0 || result < 0 || result > 5, "rando(5)", result);
	
	tests++;
	result = rando(5, 10);
	//EXPECTED: a random integer between 5 and 10 (could be 5 or 10)
	test(typeof result !== "number" || result % 1 !== 0 || result < 5 || result > 10, "rando(5, 10)", result);
	
	tests++;
	result = rando(5, "float");
	//EXPECTED: a floating-point number between 0 and 5 (could be exactly 0, but never exactly 5)
	test(typeof result !== "number" || result < 0 || result >= 5, "rando(5, \"float\")", result);
	
	tests++;
	result = rando(5, 10, "float");
	//EXPECTED: a floating-point number between 5 and 10 (could be exactly 5, but never exactly 10)
	test(typeof result !== "number" || result < 5 || result >= 10, "rando(5, 10, \"float\")", result);
	
	tests++;
	result = rando(true, false);
	//EXPECTED: either true or false
	test(typeof result !== "boolean", "rando(true, false)", result);
	
	tests++;
	result = rando(["a", "b"]);
	//EXPECTED: {index:..., value:...} object representing a value of the provided array OR false if array is empty
	test(typeof result !== "object" || (!(result.value === "a" && result.index === 0) && !(result.value === "b" && result.index === 1)), "rando([\"a\", \"b\"])", result);
	
	tests++;
	result = rando({a: 1, b: 2});
	//EXPECTED: {key:..., value:...} object representing a property of the provided object OR false if object has no properties
	test(typeof result !== "object" || (!(result.value === 1 && result.key === "a") && !(result.value === 2 && result.key === "b")), "rando({a: 1, b: 2})", result);
	
	tests++;
	result = rando("Gee willikers!");
	//EXPECTED: a character from the provided string OR false if the string is empty. Reoccurring characters will naturally form a more likely return value
	test(typeof result !== "string" || result.length !== 1 || "Gee willikers!".indexOf(result) === -1, "rando(\"Gee willikers!\")", result);
	
	tests++;
	result = rando(null);
	//EXPECTED: ANY invalid arguments return false
	test(result !== false, "rando(null)", result);
	
	tests++;
	result = randoSequence(5);
	//EXPECTED: an array of integers from 0 through 5 in random order
	test(!isArray(result) || result.length !== 6 || !arraysMatch(result.sort(), [0, 1, 2, 3, 4, 5]), "randoSequence(5)", result);
	
	tests++;
	result = randoSequence(5, 10);
	//EXPECTED: an array of integers from 5 through 10 in random order
	test(!isArray(result) || result.length !== 6 || !arraysMatch(result.sort(), [10, 5, 6, 7, 8, 9]), "randoSequence(5, 10)", result);
	
	tests++;
	result = randoSequence(["a", "b"]);
	//EXPECTED: an array of {index:..., value:...} objects representing the values of the provided array in random order
	test(!isArray(result) || result.length !== 2 || !arraysMatch(sortAndStringifyObjectsInArray(result), ["index:0;value:a", "index:1;value:b"]), "randoSequence([\"a\", \"b\"])", result);
	
	tests++;
	result = randoSequence({a: 1, b: 2});
	//EXPECTED: an array of {key:..., value:...} objects representing the properties of the provided object in random order
	test(!isArray(result) || result.length !== 2 || !arraysMatch(sortAndStringifyObjectsInArray(result), ["key:a;value:1", "key:b;value:2"]), "randoSequence({a: 1, b: 2})", result);
	
	tests++;
	result = randoSequence("Good gravy!");
	//EXPECTED: an array of the characters of the provided string in random order
	test(!isArray(result) || result.sort().join("|") !== " |!|G|a|d|g|o|o|r|v|y", "randoSequence(\"Good gravy!\")", result);
	
	tests++;
	result = randoSequence(null);
	//EXPECTED: ANY invalid arguments return false
	test(result !== false, "randoSequence(null)", result);
}
catch(e){
	console.error("ERROR: " + e);
	var errored = true;
}

console.log((!errored && passed === tests ? "Perfect! " : "Complete: ") + passed + "/" + tests + " executed tests passed.");