import { INCREMENT, DECREMENT, PUSH } from './constance'

export default function (
  state = { count: 100, str: '12345', arr: [100, 200, 300] },
  action
) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
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
