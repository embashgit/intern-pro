/**
 * Check if a variable is a string
 * @param  {Any}  testString
 * @return {Boolean}
 */
export const isString = testString =>
  typeof testString === 'string' || testString instanceof String;

/**
 * Check if a variable is boolean
 * @param  {Any}  testBoolean
 * @return {Boolean}
 */
export const isBoolean = testBoolean =>
  typeof testBoolean === 'boolean' || testBoolean instanceof Boolean;

/**
 * Check if a variable is an object
 * @param  {Any}  testObject
 * @return {Boolean}
 */
export const isObject = (testObject) => {
  if (testObject === null || Array.isArray(testObject)) {
    return false;
  }
  return typeof testObject === 'object' || testObject instanceof Object;
};

/**
 * Check if an object has no keys (is empty)
 * @param  {Any}  testObject
 * @return {Boolean}
 */
export const isEmptyObject = testObject =>
  isObject(testObject) && Object.keys(testObject).length === 0;

  /**
   * Check if a variable is a function
   * @param  {Any}  testFunction
   * @return {Boolean}
   */
export const isFunction = testFunction =>
  !!(testFunction && testFunction.constructor && testFunction.call && testFunction.apply);
