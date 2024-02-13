const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ CORRECT!: ${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
  } else {
    console.log(`🛑🛑🛑 Please try again. ${inspect(actual)} !== ${inspect(expected)} 🛑🛑🛑`);
  }
};

module.exports = assertObjectsEqual;