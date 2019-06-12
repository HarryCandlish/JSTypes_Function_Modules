function callsFunction(n) {
  n();
}

// takes function as a parameter and calls that parameter

function callsProperty(obj) {
  return obj.increment();
}

// {
//   n: 0,
//   increment: function () {
//     this.n++
//   }

// obj = accessing the increment function within the callsProperty function which adds 1 to the (n) property.

function filter(arr) {
  var x = [];
  arr.filter(n => {
    if (n % 2 == 0) x.push(n);
  });
  return x;
}

// filter takes an array as the first parameter, a function as the second parameter, and only returns elements for which the function returns true

module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
  filter: filter
};
