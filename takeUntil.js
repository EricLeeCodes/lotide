const takeUntil = function(array, callback) {
  let results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }

};
//Test Cases:

const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results1 = takeUntil(data1, data => data === 7);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === 'Redwood');
console.log(results2);