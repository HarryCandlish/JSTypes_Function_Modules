function getBoolean(type, n) {
  if (type === n) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getBoolean: getBoolean
};
