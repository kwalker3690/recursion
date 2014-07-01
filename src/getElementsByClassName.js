// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(classTitle){
	var result = [];
	var targetElement;

	if (arguments[1]){
		targetElement = arguments[1]
	}else{
		targetElement = document.body;
	}

	var targetElementNodes = targetElement.childNodes;

	for(var i=0; i<targetElementNodes.length; i++){
		var value = targetElementNodes[i]
		var classes = value.classList;

		getElementsByClassName(classTitle, value);

		if(classes && classes.contains(classTitle)){
			result.push(value)
		}

		var newArray = result;
	}
	return newArray

};