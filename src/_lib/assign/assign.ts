/* eslint-disable @typescript-eslint/no-explicit-any */
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
