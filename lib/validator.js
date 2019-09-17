'use strict';
/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @returns {function}
 */
const getValidator = (input) => {
  const ruleObject = {
    string: isString,
    number: isNumber,
    array: isArray,
    object: isObject,
    boolean: isBoolean,
    function: isFunction,
    arrayOfStrings: isArrayOfStrings,
    arrayOfNumbers: isArrayOfNumbers,
    arrayOfObjects: isArrayOfObjects,
    arrayOfBooleans: isArrayOfBooleans,
  };
  return ruleObject[input];
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = (input) => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNumber = (input) => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArray = (input) => {
  return Array.isArray(input);
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
const isObject = (input) => {
  return typeof input === 'object';
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBoolean = (input) => {
  return typeof input === 'boolean';
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunction = (input) => {
  return typeof input === 'function';
};

/**
 * Is this an array of strings?
 * @param input
 * @returns {boolean}
 */
const isArrayOfStrings = (input) => {
  const checkedArray = input.map(item => {
    return isString(item);
  });
  if(checkedArray.includes(false)) {
    return false;
  } else {
    return true;
  }
};

/**
 * Is this an array of numbers?
 * @param input
 * @returns {boolean}
 */
const isArrayOfNumbers = (input) => {
  const checkedArray = input.map(item => {
    return isNumber(item);
  });
  if(checkedArray.includes(false)) {
    return false;
  } else {
    return true;
  }
};

/**
 * Is this an array of objects?
 * @param input
 * @returns {boolean}
 */
const isArrayOfObjects = (input) => {
  const checkedArray = input.map(item => {
    return isObject(item);
  });
  if(checkedArray.includes(false)) {
    return false;
  } else {
    return true;
  }
};

/**
 * Is this an array of booleans?
 * @param input
 * @returns {boolean}
 */
const isArrayOfBooleans = (input) => {
  const checkedArray = input.map(item => {
    return isBoolean(item);
  });
  if(checkedArray.includes(false)) {
    return false;
  } else {
    return true;
  }
};

module.exports = {
  isArray,
  isArrayOfBooleans,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfStrings,
  isBoolean,
  isFunction,
  isNumber,
  isObject,
  isString,
  getValidator,
};
