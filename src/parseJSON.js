// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
	json = json.replace(/\s+/g, '');
	var jsonSliced = json.slice(1,json.length-1)

	if(json === "null"){
		json = null;
		return json
	}

	else if(json === "false"){
		json = false;
		return json
	}

	else if(json === "true"){
		json = true;
		return json
	}

	else if(+json || json === "0"){
		return +json;
	}

	else if(json.charAt(0)==='['){//array type
		if(json === "[]"){
			return [];
		}else{
		  	var arraySplit = jsonSliced.split(',')
		  	var newArray = [];
		  	arraySplit.forEach(function(value){
				value = parseJSON(value)
				newArray.push(value)
			})
		  	return newArray
		}
	}
	else if(json.charAt(0)==='{'){//object type
		if(json === "{}"){
			return {};
		}else{
			var arraySplit = jsonSliced.split(',');
			var newObj = {};
			arraySplit.forEach(function(property){
				var elementsArray = property.split(':');
				elementsArray.forEach(function(value){
					value = parseJSON(value)
				})
				newObj[elementsArray[0]] = elementsArray[1]
			})
			for(var key in newObj){
				newObj[key] = parseJSON(newObj[key])
				new_key = parseJSON(key);
				Object.defineProperty(newObj, new_key,
		    	Object.getOwnPropertyDescriptor(newObj, key));
				delete newObj[key];
			}
			return newObj
		}
	}else{
		return jsonSliced
	}

};
