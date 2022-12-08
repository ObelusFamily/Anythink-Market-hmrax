const simulateSlowLoad = (timeInMilliseconds) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      resolve();
    }, timeInMilliseconds)
  })
}

module.exports = {
  simulateSlowLoad,
}
