import { SETFLAG } from '../constants'

let initState = { flag: 'all' }

export default function (state = initState, action) {
  switch (action.type) {
    case SETFLAG:
      return {
        ...state,
        flag: 'child',
      }
    default:
      return state
  }
}
