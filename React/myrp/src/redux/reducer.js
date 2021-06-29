import { updateTodo } from './actions'
import {
  ADDTODO,
  UPDATETODO,
  DELETETODO,
  UPDATEALLTODO,
  DELETECHECKTODO,
} from './constants'


export default function (state, action) {
  state = JSON.parse(localStorage.getItem('state')) || {list:[]}
  let list = [...state.list]
  let newList = null
  switch (action.type) {
    case ADDTODO:
      let id = list.length ? list[list.length - 1].id + 1 : 1
      let todo = { id, todoName: action.data, isDone: false }
      list.push(todo)
      newList = [...list]
      return {
        ...state,
        list: newList,
      }
    case UPDATETODO:
      list.forEach((item) => {
        if (item.id === action.id) {
          item.isDone = !item.isDone
        }
      })
      newList = [...list]
      return {
        ...state,
        list: newList,
      }
    case DELETETODO:
      newList = list.filter((item) => item.id !== action.id)
      return {
        ...state,
        list: newList,
      }
    case UPDATEALLTODO:
      let result = list.every((item) => item.isDone)
      newList = list.map((item) => {
        item.isDone = !result
        return item
      })
      return {
        ...state,
        list: newList,
      }
    case DELETECHECKTODO:
      newList = list.filter((item) => !item.isDone)
      return {
        ...state,
        list: newList,
      }
    default:
      return state
  }
}
