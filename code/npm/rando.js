try{var randoJsCopyOfCryptoUUIDa0d75fe829cf4fd0832ddc9c95aa13f5 = require('crypto');}
catch(e){}

function rando(arg1, arg2, arg3){
    var isUndefined = (variable) => typeof variable === "undefined",
    isNumber = (num) => typeof num === "number" && !isNaN(num),
    isString = (str) => typeof str === "string",
    isObject = (obj) => typeof obj === "object",
    isFunction = (fn) => typeof fn === "function",
    isArray = (arr) => !isUndefined(arr) && arr !== null && arr.constructor === Array,
    cryptoRandom = () => {
        try{
            var cryptoRandoms, cryptoRandomSlices = [], cryptoRandom;
            while((cryptoRandom = "." + cryptoRandomSlices.join("")).length < 30){
                cryptoRandoms = randoJsCopyOfCryptoUUIDa0d75fe829cf4fd0832ddc9c95aa13f5.randomFillSync(new Uint32Array(5));
                for(var i = 0; i < cryptoRandoms.length; i++){
                	var cryptoRandomSlice = cryptoRandoms[i] < 4000000000 ? cryptoRandoms[i].toString().slice(1) : "";
                    if(cryptoRandomSlice.length > 0) cryptoRandomSlices[cryptoRandomSlices.length] = cryptoRandomSlice;
                }
            }
            return Number(cryptoRandom);
        }
        catch(e){
            return Math.random();
        }
    };
    
    try{
        if(arg1 !== null && arg2 !== null && arg3 !== null){
            if(isUndefined(arg1)){
                //regular decimal
                return cryptoRandom();
            }
            
            var jqueryObject;
			if(isUndefined(arg2) && isObject(arg1) && isFunction(arg1.constructor) && arg1.constructor.name === "jQuery" && isNumber(arg1.length) && isFunction(arg1.eq) && isObject(arg1.eq(0)) && isFunction(arg1.eq(0).constructor) && arg1.eq(0).constructor.name === "jQuery"){
				//jQuery object
                if(arg1.length == 0) return false;
                var index = rando(0, arg1.length - 1);
                return {index:index, value:arg1.eq(index)};
			}
            
            if(isNumber(arg1) && isNumber(arg2) && isString(arg3) && arg3.toLowerCase().trim() == "float"){
                //float from min to max (inclusive of min and exclusive of max)
                if(arg1 > arg2) var temp = arg2, arg2 = arg1, arg1 = temp;
                return cryptoRandom() * (arg2 - arg1) + arg1;
            }
            
            if(isArray(arg1) && arg1.length > 0 && isUndefined(arg2)){
                //array
                var arr = arg1, pickedIndex = cryptoRandom() * arr.length << 0;
                return {index: pickedIndex, value: arr[pickedIndex]};
            }
            
            if(isObject(arg1) && isUndefined(arg2)){
                //object
                var obj = arg1, keys = Object.keys(obj);
                if(keys.length > 0){
                    var key = keys[keys.length * cryptoRandom() << 0];
                    return {key: key, value: obj[key]};
                }
            }
            
            if(((arg1 === true && arg2 === false) || (arg1 === false && arg2 === true)) && isUndefined(arg3)){
                //boolean
                return rando() < .5;
            }
            
            if(isNumber(arg1) && isUndefined(arg2)){
                //int from 0 through max OR min through 0 if negative (inclusive of both min and max)
                if(arg1 >= 0) return rando(0, arg1);
                return rando(arg1, 0);
            }
            
            if(isNumber(arg1) && isString(arg2) && arg2.toLowerCase().trim() == "float" && isUndefined(arg3)){
                //float from 0 to max OR min to 0 if negative (inclusive of min and exclusive of max)
                return arg1 >= 0 ? rando(0, arg1, "float") : rando(arg1, 0, "float");
            }
            
            if(isNumber(arg1) && isNumber(arg2) && isUndefined(arg3)){
                //int from min through max (inclusive of both min and max)
                if(arg1 > arg2) var temp = arg2, arg2 = arg1, arg1 = temp;
                arg1 = Math.floor(arg1), arg2 = Math.floor(arg2);
                return Math.floor(cryptoRandom() * (arg2 - arg1 + 1) + arg1);
            }
            
            if(isString(arg1) && arg1.length > 0 && isUndefined(arg2)){
                //string
                return arg1.charAt(rando(0, arg1.length - 1));
            }
        }
        return false;
    }
    catch(e){
    	console.log("ERROR: " + e);
        return false;
    }
}

function randoSequence(arg1, arg2){
    var isUndefined = (variable) => typeof variable === "undefined",
    isNumber = (num) => typeof num === "number" && !isNaN(num),
    isString = (str) => typeof str === "string",
    isObject = (obj) => typeof obj === "object",
    isFunction = (fn) => typeof fn === "function",
    isArray = (arr) => !isUndefined(arr) && arr !== null && arr.constructor === Array;
    
    try{
        if(isUndefined(arg1) || arg1 === null || arg2 === null) return false;//invalid arguments
        
        var arr = [];
        
        var jqueryObject;
		if(isUndefined(arg2) && isObject(arg1) && isFunction(arg1.constructor) && arg1.constructor.name === "jQuery" && isNumber(arg1.length) && isFunction(arg1.eq) && isObject(arg1.eq(0)) && isFunction(arg1.eq(0).constructor) && arg1.eq(0).constructor.name === "jQuery"){
		    //jQuery object
            if(arg1.length > 0){
                arr = randoSequence(arg1.length - 1);
                for(var i = 0; i < arr.length; i++) arr[i] = {index:arr[i], value:arg1.eq(arr[i])};
            }
            return arr;
        }
        
        if(!isUndefined(arg2)){
            if(!isNumber(arg1) || !isNumber(arg2) || arg1 % 1 > 0 || arg2 % 1 > 0) return false;//invalid arguments
            
            //int from min through max (inclusive of both min and max)
            if(arg1 > arg2) var temp = arg2, arg2 = arg1, arg1 = temp;
            for(var i = arg1; i <= arg2; i++) arr[arr.length] = i;
        }
        else if(isArray(arg1) && isUndefined(arg2)){
            //array
            for(var i = 0; i < arg1.length; i++) arr[arr.length] = {index:i, value:arg1[i]};
        }
        else if(isObject(arg1) && isUndefined(arg2)){
            //object
            for(var prop in arg1) if(Object.prototype.hasOwnProperty.call(arg1, prop)) arr[arr.length] = {key:prop, value:arg1[prop]};
        }
        else if(isString(arg1) && isUndefined(arg2)){
            //string
            for(var i = 0; i < arg1.length; i++) arr[arr.length] = arg1.charAt(i);
        }
        else if(isNumber(arg1) && isUndefined(arg2)){
            //int from 0 through max OR min through 0 if negative (inclusive of both min and max)
            return arg1 >= 0 ? randoSequence(0, arg1) : randoSequence(arg1, 0);
        }
        else{
            //invalid arguments
            console.log("invalid.");
            return false;
        }
        
        //shuffle values
        var indexToSwapWith;
        for(i = arr.length - 1; i > 0; i--) indexToSwapWith = rando(i), temp = arr[i], arr[i] = arr[indexToSwapWith], arr[indexToSwapWith] = temp;
        
        return arr;
    }
    catch(e){
    	console.log("ERROR: " + e);
        return false;
    }
}

module.exports.rando = rando, module.exports.randoSequence = randoSequence;