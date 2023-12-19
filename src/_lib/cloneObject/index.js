import assign from '../assign/index.js'

export default function cloneObject(dirtyObject) {
  return (0, assign)({}, dirtyObject)
}
