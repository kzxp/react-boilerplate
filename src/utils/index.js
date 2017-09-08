import { getSnapshot } from 'mobx-state-tree'


export const asReducer = (instance) => {
  return (state = {}, patch = {}) => {
    if (patch.op && patch.path) return getSnapshot(instance)
    return state
  }
}

// export const asReducer = (instance) => {
//   return (state, patch = {}) => {
//     // if (state) applySnapshot(instance, state)
//     if (patch && patch.op && patch.path)
//       applyPatch(instance, patch)
//     return getSnapshot(instance)
//   }
// }