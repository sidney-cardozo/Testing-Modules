var squareFunction = function(num){
  return num*num;
}

var cubeFunction = function(num){
  return num*num*num;
}
var printFunction = function(num) {
  console.log(`The square of ${num} is ${squareFunction(num)}`);
}

module.exports ={
  printFunction: printFunction
};