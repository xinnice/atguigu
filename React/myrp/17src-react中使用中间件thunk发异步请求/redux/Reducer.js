import { PUSH } from './constance'

export default function (
  state = { count: 100, str: '12345', arr: [100, 200, 300] },
  action
) {
  switch (action.type) {
    case PUSH:
      let newArr = [...state.arr]
      newArr.push(action.data)
      return {
        ...state,
        arr: newArr,
      }
    default:
      return state
  }
}
