function rando(min, max, allowDecimals){
	function isUndefined(variable){
		return typeof variable === "undefined";
	}
	
	function isNumber(num){
		return typeof num === "number" && !isNaN(num);
	}
	
	function isString(str){
		return typeof str === "string";
	}
	
	function isObject(obj){
		return typeof obj === "object";
	}
	
	function isArray(arr){
		return !isUndefined(arr) && arr !== null && arr.constructor === Array;
	}
	
	try{
		if(min !== null && max !== null && allowDecimals !== null){
			if(isUndefined(min)){
				return Math.random();
			}
			
			if(!!window.jQuery && min instanceof jQuery && isUndefined(max)){
				//jQuery object
				if(min.length == 0){
					return false;
				}
				
				var index = rando(0, min.length - 1);
				return {index:index, value:min.eq(index)};
			}
			
			if(isNumber(min) && isNumber(max) && isString(allowDecimals) && allowDecimals.toLowerCase().trim() == "float"){
				//double float
				if(min > max){
					var temp = max;
					max = min;
					min = temp;
				}
				
				return Math.random() * (max - min) + min;
			}
			
			if(isArray(min) && min.length > 0 && isUndefined(max)){
				//array
				var arr = min;
				var pickedIndex = Math.random() * arr.length << 0;
				return {index: pickedIndex, value: arr[pickedIndex]};
			}
			
			if(isObject(min) && isUndefined(max)){
				//object
				var obj = min;
				var keys = Object.keys(obj);
				if(keys.length > 0){
					var key = keys[keys.length * Math.random() << 0];
   		 			return {key: key, value: obj[key]};
   		 		}
			}
			
			if(((min === true && max === false) || (min === false && max === true)) && isUndefined(allowDecimals)){
				//bool
				return rando() < .5;
			}
			
			if(isNumber(min) && isUndefined(max)){
				//single int
				if(min >= 0){
					return rando(0, min);
				}
				return rando(min, 0);
			}
			
			if(isNumber(min) && isString(max) && max.toLowerCase().trim() == "float" && isUndefined(allowDecimals)){
				//single float
				if(min >= 0){
					return rando(0, min, "float");
				}
				return rando(min, 0, "float");
			}
			
			if(isNumber(min) && isNumber(max) && isUndefined(allowDecimals)){
				//double int
				if(min > max){
					var temp = max;
					max = min;
					min = temp;
				}
				
				min = Math.floor(min);
				max = Math.floor(max);
   			 	return Math.floor(Math.random() * (max - min + 1) + min);
			}
			
			if(isString(min) && min.length > 0 && isUndefined(max)){
				//string
				return min.charAt(rando(0, min.length - 1));
			}
		}
		return false;
	}
	catch(err){
		return false;
	}
}

function randoSequence(min, max){
	function isUndefined(variable){
		return typeof variable === "undefined";
	}
	
	function isNumber(num){
		return typeof num === "number" && !isNaN(num);
	}
	
	function isString(str){
		return typeof str === "string";
	}
	
	function isObject(obj){
		return typeof obj === "object";
	}
	
	function isArray(arr){
		return !isUndefined(arr) && arr !== null && arr.constructor === Array;
	}
	
	try{
		if(isUndefined(min) || min === null || max === null){
			return false;
		}
		
		var arr = [];
		
		if(!!window.jQuery && min instanceof jQuery && isUndefined(max)){
			//jQuery object
			if(min.length > 0){
				arr = randoSequence(0, min.length - 1);
				for(var i = 0; i < arr.length; i++){
					arr[i] = {index:arr[i], value:min.eq(arr[i])};
				}
			}
			return arr;
		}
		
		//load array
		if(!isUndefined(max)){
			if(!isNumber(min) || !isNumber(max) || min % 1 > 0 || max % 1 > 0){
				return false;
			}
			//double int
			if(min > max){
				var temp = max;
				max = min;
				min = temp;
			}
			
			for(var i = min; i <= max; i++){
				arr[arr.length] = i;
			}
		}
		else if(isArray(min) && isUndefined(max)){
			//array
			for(var i = 0; i < min.length; i++){
				arr[arr.length] = {index:i, value:min[i]};
			}
		}
		else if(isObject(min) && isUndefined(max)){
			//object
			for(var prop in min){
   	 			if(Object.prototype.hasOwnProperty.call(min, prop)){
   	     			arr[arr.length] = {key:prop, value:min[prop]};
   	 			}
			}
		}
		else if(isString(min) && isUndefined(max)){
			//string
			for(var i = 0; i < min.length; i++){
				arr[arr.length] = min.charAt(i);
			}
		}
		else if(isNumber(min) && typeof isUndefined(max)){
			//single int
			if(min >= 0){
				return randoSequence(0, min);
			}
			return randoSequence(min, 0);
		}
		else{
			return false;
		}
		
		//shuffle array
		for(i = arr.length - 1; i > 0; i--){
			var indexToSwapWith = rando(i);
			var temp = arr[i];
			arr[i] = arr[indexToSwapWith];
			arr[indexToSwapWith] = temp;
		}
		
		//return
		return arr;
	}
	catch(err){
		return false;
	}
}