// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {


  if (typeof obj != "object"){
    var result;

    if(typeof obj === "string"){
      result = '"' + String(obj) + '"'
      return result;
    }else if(typeof obj === "number" || typeof obj === "boolean"){
      return String(obj)
    }
    else if (typeof obj === "null"){
      return null
    }
    else{
      result = '"' + String(obj) + '"'
      return result;
    }
  }
  else {
    var arrayType = (Object.prototype.toString.call(obj) === '[object Array]');
    var objectType = (Object.prototype.toString.call(obj) === '[object Object]');
    var newArray = []

    for(item in obj){
      var value = obj[item];
      var type = typeof value;

      if(Object.prototype.toString.call(value) === '[object Object]'){
        newArray.push('"' + item + '"' + ':' + stringifyJSON(value))
      }
      else if (Object.prototype.toString.call(value) === '[object Array]'){
        newArray.push('"' + item + '"' + ':' + stringifyJSON(value))
      }
      else{
        value = stringifyJSON(value);

        if(arrayType){
          newArray.push(value)
        }
        else{
          newArray.push('"' + item + '"' + ':' + value)
        }
      }
    }

    if(arrayType){
      return "[" + newArray + "]";
    }
    else if(objectType) {
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