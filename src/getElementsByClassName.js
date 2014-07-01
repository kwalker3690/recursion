// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(classTitle){
	// var HTMLCollection = function(array){
	// 	for(var i = 0; i < array.length; i++){
	// 		this[i] = array[i];
	// 	}
	// }

	// HTMLCollection.prototype = {
	// 	item: function(i){
	// 		if(this[i] != null){
	// 			return this[i]
	// 		}else{
	// 			return null
	// 		}
	// 	},

	// 	namedItem: function(name){

	// 	}
	// }

	var result = [];
	var docbody = document.body;
	var targetElement = docbody.childNodes;

	// if nodes has class in it, perform action, push elements into array
	// else return array

	// if(!targetElement.length){
	// 	console.log(targetElement)
	// }else{
	// 	targetElement.push(docbody)
	// 	console.log(docbody)
	// 	getElementsByClassName(classTitle);
	// }
	console.log('target1')
	console.log(targetElement)

	var array = [1,2,3,4];
	// for (var i = 0; i < array.length; i++) {
	// 	console.log(targetElement[i])
	// 	targetElement[i] = "lamp";
	// 	console.log(targetElement[i])
	// };

	for(var i=0; i<targetElement.length; i++){
		var value = targetElement[i]
		// console.log('value')
		// console.log(value)
		//value is a certain dom element in the node list
		var classes = value.classList
		if(classes && classes.contains(classTitle)){ // if classes exists in top dom element, and classes has the class title in it
			console.log('first')
			result.push(value) // put the dom element in the result array



			if(value.childNodes.length > 1){// if value has dom elements underneath

				targetElement = value.childNodes;
				console.log('target2')
				console.log(targetElement)
				// getElementsByClassName(classTitle) //check to see if the classTitle is in there - ie run recursive case
			}
		}
		// else if(value.childNodes.length != 0){ // if value has dom elements underneath
		// 	console.log('second')
		// 	targetElement = value.childNodes; // update the targetElement to be the array of dom elements
		// 	getElementsByClassName(classTitle) // run the
		// }
		//problem is need to find the bottoming out, when it has searched all the dom elements and there are no more to look at - break it at that point
	}
	return result



	// 	alert('hello')
	// 	var nodes = targetElement[0].childNodes
	// 	for(var i=0; i<nodes.length; i++){
	// 		var value = nodes[i]
	// 		//value is a certain element in the node list
	// 		var classes = value.classList
	// 		//classes is a list of the classes on the certain element in the node list
	// 		// console.log(classes)
	// 		//value.childNodes is a list of dom elements inside the certain element from the node list
	// 		if(classes && classes.contains(classTitle)){
	// 			result.push(value)
	// 		}
	// 		//if value.childNodes.length != 0, check to see if the classTitle is in there - ie run recursive case
	// 		if(value.childNodes.length != 0){
	// 			targetElement = value
	// 			getElementsByClassName(classTitle)
	// 		}
	// 	}
	// }else{
	// 	return;
	// }

	//for loop should be in the element the user is looking at, not just the top node list


	return result


};

//search through all classes in document, find the classes, return an array of the HTML elements that have that class