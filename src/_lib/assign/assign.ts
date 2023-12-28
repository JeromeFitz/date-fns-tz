/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @todo remove this file
 * can use: lodash/cloneDeep via ../cloneObject
 */
function assign(
  target: { [x: string]: any } | null,
  dirtyObject: { [x: string]: any },
) {
  if (target == null) {
    throw new TypeError(
      "assign requires that input parameter not be null or undefined",
    );
  }

  dirtyObject = dirtyObject || {};

  for (const property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

export { assign };
