//-----------------------------------
// INSTRUCTIONS
//-----------------------------------
// This code will test all Rando.js functions to ensure they're working properly. All you 
// need to do is run this code in the console of the HTML page you'd like to test. Results 
// will be written to the page and in the console.

var tests = 1;
var passed = 0;

//-----------------------------------
// CHECK IF SCRIPTS HAVE BEEN LOADED
//-----------------------------------

var logs = "";
if(typeof rando == "function" && typeof randoSequence == "function"){
	passed++;
	var randojsLoaded = true;
}
else{
	console.error("FAILURE: You need to source in the Rando.js script. Visit https://randojs.com/ to learn how.");
	logs += "<div style='padding:5px 0px;'><span style='background:red;color:white;padding:0px 5px;'>FAILURE:</span> You need to source in the Rando.js script. Visit <a href='https://randojs.com' target='_blank'>https://randojs.com/</a> to learn how.</div>";
}

if(!!randojsLoaded){
	if(typeof jQuery == "function" && typeof $ == "function"){
		try{
			document.write("<div>a</div><div>b</div><div>c</div>");
		}
		catch(e){
			console.error("FAILURE: JavaScript's document.write() function failed to create div elements on the page, so jQuery testing will not be accurate.");
			logs += "<div style='padding:5px 0px;'><span style='background:red;color:white;padding:0px 5px;'>FAILURE:</span> JavaScript's document.write() function failed to create div elements on the page, so jQuery testing will not be accurate.</div>";
		}
		
		var jQueryLoaded = true;
	}
	else{
		console.warn("Notice: jQuery is missing, so Rando.js will not be tested for compatibility with it. Learn how to source in jQuery at https://www.w3schools.com/jquery/jquery_get_started.asp");
		logs += "<div style='padding:5px 0px;'><span style='background:yellow;color:black;padding:0px 5px;'>Notice:</span> jQuery is missing, so Rando.js will not be tested for compatibility with it. Learn how to source in jQuery at <a href='https://www.w3schools.com/jquery/jquery_get_started.asp' target='_blank'>https://www.w3schools.com/jquery/jquery_get_started.asp</a></div>";
	}
	
	
	try{
		//-----------------------------------
		// HELPER FUNCTIONS
		//-----------------------------------
		
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
			if(failed){
				console.error("FAILURE: " + failCall + " failed by returning: ", failedResult);
				logs += "<div style='padding:5px 0px;'><span style='background:red;color:white;padding:0px 5px;'>FAILURE:</span> " + failCall + " failed by returning: " + failedResult + "</div>";
			}
			else{
				passed++;
			}
		}
		
		
		
		//-----------------------------------
		// EXECUTE TESTS
		//-----------------------------------
		
		tests++;
		var result = rando();
		test(typeof result !== "number" || result < 0 || result >= 1, "rando()", result);
		
		tests++;
		result = rando(5);
		test(typeof result !== "number" || result % 1 !== 0 || result < 0 || result > 5, "rando(5)", result);
		
		tests++;
		result = rando(5, 10);
		test(typeof result !== "number" || result % 1 !== 0 || result < 5 || result > 10, "rando(5, 10)", result);
		
		tests++;
		result = rando(5, "float");
		test(typeof result !== "number" || result < 0 || result >= 5, "rando(5, \"float\")", result);
		
		tests++;
		result = rando(5, 10, "float");
		test(typeof result !== "number" || result < 5 || result >= 10, "rando(5, 10, \"float\")", result);
		
		tests++;
		result = rando(true, false);
		test(typeof result !== "boolean", "rando(true, false)", result);
		
		tests++;
		result = rando(["a", "b"]);
		test(typeof result !== "object" || (!(result.value === "a" && result.index === 0) && !(result.value === "b" && result.index === 1)), "rando([\"a\", \"b\"])", result);
		
		tests++;
		result = rando({a: 1, b: 2});
		test(typeof result !== "object" || (!(result.value === 1 && result.key === "a") && !(result.value === 2 && result.key === "b")), "rando({a: 1, b: 2})", result);
		
		if(jQueryLoaded){
			tests++;
			result = rando($("div"));
			test(!isJQueryResult(result), "rando($(\"div\"))", result);
		}
		
		tests++;
		result = rando("Gee willikers!");
		test(typeof result !== "string" || result.length !== 1 || "Gee willikers!".indexOf(result) === -1, "rando(\"Gee willikers!\")", result);
		
		tests++;
		result = rando(null);
		test(result !== false, "rando(null)", result);
		
		tests++;
		result = randoSequence(5);
		test(!isArray(result) || result.length !== 6 || !arraysMatch(result.sort(), [0, 1, 2, 3, 4, 5]), "randoSequence(5)", result);
		
		tests++;
		result = randoSequence(5, 10);
		test(!isArray(result) || result.length !== 6 || !arraysMatch(result.sort(), [10, 5, 6, 7, 8, 9]), "randoSequence(5, 10)", result);
		
		tests++;
		result = randoSequence(["a", "b"]);
		test(!isArray(result) || result.length !== 2 || !arraysMatch(sortAndStringifyObjectsInArray(result), ["index:0;value:a", "index:1;value:b"]), "randoSequence([\"a\", \"b\"])", result);
		
		tests++;
		result = randoSequence({a: 1, b: 2});
		test(!isArray(result) || result.length !== 2 || !arraysMatch(sortAndStringifyObjectsInArray(result), ["key:a;value:1", "key:b;value:2"]), "randoSequence({a: 1, b: 2})", result);
		
		if(jQueryLoaded){
			tests++;
			result = randoSequence($("div"));
			test(!isArray(result) || result.length !== 3 || !areJQueryResults(result), "randoSequence($(\"div\"))", result);
		}
		
		tests++;
		result = randoSequence("Good gravy!");
		test(!isArray(result) || result.sort().join("|") !== " |!|G|a|d|g|o|o|r|v|y", "randoSequence(\"Good gravy!\")", result);
		
		tests++;
		result = randoSequence(null);
		test(result !== false, "randoSequence(null)", result);
	}
	catch(e){
		console.error("ERROR: " + e);
		logs += "<div style='padding:5px 0px;'><span style='background:red;color:white;padding:0px 5px;'>ERROR:</span> " + e + "</div>";
		var errored = true;
	}
}

console.log((!errored && passed === tests ? "Perfect! " : "Complete: ") + passed + "/" + tests + " executed tests passed.");
logs += "<div style='padding:5px 0px;'>" + (!errored && passed === tests ? "<span style='background:lime;color:black;padding:0px 5px;'>Perfect!</span> " : "<span style='background:black;color:white;padding:0px 5px;'>Complete:</span> ") + passed + "/" + tests + " executed tests passed.</div>";
setTimeout(function(){
	try{
		document.open();
		document.write(logs);
	}
	catch(e){}
}, 1);
