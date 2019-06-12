function getBoolean(type, n) {
  if (type === n) {
    return true;
  } else {
    return false;
  }
}

function getFunction() {
  return function() {};
}

module.exports = {
  getBoolean: getBoolean,
  getFunction: getFunction
};
