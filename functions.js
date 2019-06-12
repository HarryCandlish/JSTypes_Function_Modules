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

module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty
};
