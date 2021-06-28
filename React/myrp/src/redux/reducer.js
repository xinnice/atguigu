import { GETDATA } from './constants'

let initState = { list: [] }

export default function Reducer(state = initState, action) {
  switch (action.type) {
    case GETDATA:
      return {
        ...state,
        list: action.data,
      }
    default:
      return state
  }
}
