let strictEqual = (data1, data2) => {
  if (data1 != data2) {
    return false
  } else if (typeof data1 != typeof data2) {
    return false
  } else {
    return true
  }
}

module.exports = strictEqual
