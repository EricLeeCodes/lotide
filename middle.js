const middle = function(arr) {
  let newArray = [];
  let middle = 0;

  if (arr.length <= 2) {
    return newArray;
  } else if (arr.length % 2 === 1) {
    middle = (arr.length - 1) / 2;
    newArray.push(arr[middle]);
  } else {
    middle = (((arr.length - 1) / 2));
    newArray.push(arr[Math.floor(middle)]);
    middle = (((arr.length - 1) / 2));
    newArray.push(arr[Math.ceil(middle)]);
  }
  return newArray;
};

module.exports = middle;