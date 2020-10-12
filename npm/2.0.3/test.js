var tests = 1;
var passed = 0;

//--------------------------------
//REQUIRES
//--------------------------------
	
try{
	var randojs = require('./rando-min.js'), rando = randojs.rando, randoSequence = randojs.randoSequence;
	passed++;
	var randojsLoaded = true;
}
catch(e){
	console.error("\033[101m\033[97m FAILURE: \033[0m Could not find \"@nastyox/rando.js\" module, which is necessary for Rando.js development.");
}

if(!!randojsLoaded){
	try{
		var {JSDOM} = require('jsdom');
		var {window} = new JSDOM(`<div>a</div><div>b</div><div>c</div>`);
		var $ = require('jquery')(window);
		var jQueryLoaded = true;
	}
	catch(e){
		console.warn("\033[103m\033[30m Notice: \033[0m Rando.js cannot be tested for compatibility with jQuery until both the \"jsdom\" and \"jquery\" modules are found.");
	}
	
	
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
				obj = arr[i], strs = [];
				for(var prop in obj) if(Object.prototype.hasOwnProperty.call(obj, prop)) strs[strs.length] = prop + ":" + obj[prop];
				arr[i] = strs.sort().join(";");
			}
			return arr.sort();
		}
		
		function isJQueryResult(result){
			return typeof result === "object" && typeof result.index === "number" && typeof result.value === "object" && result.index >= 0 && result.index < 3 && ("0" in result.value) && ("textContent" in result.value["0"]) && ["a", "b", "c"].indexOf(result.value["0"].textContent) > -1;
		}
		
		function areJQueryResults(results){
			for(var i = 0; i < results.length; i++) if(!isJQueryResult(results[i])) return false;
			return true;
		}
		
		function test(failed, failCall, failedResult){
			if(failed) console.error("\033[101m\033[97m FAILURE: \033[0m " + failCall + " failed by returning: ", failedResult);
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
		
		if(jQueryLoaded){
			tests++;
			result = rando($("div"));
			//EXPECTED: {index:..., value:...} object representing a jQuery element from the provided jQuery element set OR false if the provided jQuery element set does not contain any elements.
			test(!isJQueryResult(result), "rando($(\"div\"))", result);
		}
		
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
		
		if(jQueryLoaded){
			tests++;
			result = randoSequence($("div"));
			//EXPECTED: an array of {index:..., value:...} objects representing all jQuery elements from the provided jQuery element set in random order.
			test(!isArray(result) || result.length !== 3 || !areJQueryResults(result), "randoSequence($(\"div\"))", result);
		}
		
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
		console.error("\033[101m\033[97m ERROR: \033[0m " + e);
		var errored = true;
	}
}

console.log((!errored && passed === tests ? "\033[102m\033[30m Perfect! \033[0m " : "\033[40m\033[97m Complete: \033[0m ") + passed + "/" + tests + " executed tests passed.");