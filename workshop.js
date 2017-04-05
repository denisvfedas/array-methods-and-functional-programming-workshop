function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  
  for (... theArray.length ...) {
    ...
    callback(...)
    ...
  }
  */
  for(var i = 0; i < theArray.length; i++) {
    callback(theArray[i]);
  }
}

function map(mappingFunction, theArray) {
    var newArr = [];
    // function mappingFunction() {
    //   return newArr.push(theArray[i] * 2);
    //   }
    // for(var i = 0; i < theArray.length; i++) {
    //   mappingFunction();
    // }
    
    forEach(function(element) {
      newArr.push(mappingFunction(element))
    }, theArray);
    
    return newArr;
}

function filter(predicate, theArray) {
    var newArr = [];
    
    forEach(function(element) {
      if(predicate(element)){
        newArr.push(element);
      }
    }, theArray)
    
    return newArr;
}

function every(predicate, theArray) {
  
  var newArr = [];
  
  forEach(function(element) {
    if(!predicate(element)) {
      return false;
    }
    else {
      newArr.push(element); 
    }
    
  }, theArray)
  if(newArr.length === theArray.length) {
    return true;
  }
  else {
    return false;
  }

  
  // forEach(function(element) {
  //   if(!predicate(element)) return false ;
  // }, theArray);
  
  // return true;
}

function some(predicate, theArray) {
  if(theArray.length === 0) return false;
  
  for(var i = 0; i < theArray.length; i++) {
    if(predicate(theArray[i])) {
      return true;
    } else {
      return false;
    }
  }
}

function indexOf(item, theArray) {
  
  if(theArray.length === 0) return -1;
  
    for(var i = 0; i < theArray.length; i++) {
      if(item === theArray[i]) {
        return i;
      }
    }
    return -1;
}

function findIndex(predicate, theArray) {
  
  var index = 0;
  forEach(function(element) {
    forEach(function(key) {
      index ++;
        if(predicate(key) ) {
          return index;
        }
    }, element);
  }, theArray);
  return - 1;
}

function first(n, theArray) {

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
