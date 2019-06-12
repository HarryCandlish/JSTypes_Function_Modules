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

function getNull() {
  return null;
}

function getNumber() {
  return 1;
}

function getObject() {
  return {};
}

function getString() {
  return "hello";
}

module.exports = {
  getBoolean: getBoolean,
  getFunction: getFunction,
  getNull: getNull,
  getNumber: getNumber,
  getObject: getObject,
  getString: getString
};
