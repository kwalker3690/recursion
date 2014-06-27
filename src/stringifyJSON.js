// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {


  if (typeof obj != "object" || obj===null){ //entries that aren't objects

    if(typeof obj === "string"){
      obj = '"' + String(obj) + '"';
    }

    return String(obj)
  }
  else{ //entries that are objects
    var newArray = []
    var item;

    for(item in obj){
      var value = obj[item];
      if(typeof value === 'function' || typeof value ==='undefined'){
        //this is hacky, try to come back and fix this
        return '{}';
      }
      var type = typeof value;

      value = stringifyJSON(value);

      if(obj && obj.constructor === Array){
        newArray.push(value)
      }
      else{
        newArray.push('"' + item + '"' + ':' + value)
      }
    }


    if(obj && obj.constructor === Array){
      return "[" + newArray + "]";
    }
    else if(obj && obj.constructor === Object) {
      return "{" + newArray + "}"
    }
    else{
      return 'null';
    }
  }
};

// base case : if object is json, return

// action: convert value to string

// recursive case: based on what segments have to be converted to string (ie object keys etc)