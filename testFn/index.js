module.exports = {
  forEach(arr, fn) {
    for (let el of arr) {
      fn(el);
    }
  },

  map(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i));
    }

    return result;
  },
};
