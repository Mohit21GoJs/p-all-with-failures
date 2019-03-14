/**
 * Validate input
 * @param {any} input
 * @returns {Boolean}
 */
const validateInput = input => input && Array.isArray(input);

/**
 * Id function
 * @param {any} val
 * @returns {any}
 */
const idFunc = val => val;

const promiseAllWithFailures = inputArr => {
  if (!validateInput(inputArr)) {
    return Promise.reject(new Error('Input must be an array'));
  }
  return Promise.all(
    inputArr.map(input => {
      const failCb = input.failureCb || idFunc;
      return input.func.catch(failCb);
    }),
  );
};

exports.promiseAllWithFailures = promiseAllWithFailures;

module.exports = exports;
