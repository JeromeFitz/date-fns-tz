/**
 * @todo remove this file
 * can use: lodash/cloneDeep
 */
import { assign } from "../assign/index";

function cloneObject(dirtyObject) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //  @ts-ignore
  return ({}, assign)({}, dirtyObject);
}

export { cloneObject };
