import {
  ADDTODO,
  UPDATETODO,
  DELETETODO,
  UPDATEALLTODO,
  DELETECHECKTODO,
} from './constants'

function addTodo(data) {
  return {
    type: ADDTODO,
    data,
  }
}

function updateTodo(id) {
  return {
    type: UPDATETODO,
    id,
  }
}

function deleteTodo(id) {
  return {
    type: DELETETODO,
    id,
  }
}

function updateAllTodo() {
  return {
    type: UPDATEALLTODO,
  }
}

function deleteCheckTodo() {
  return {
    type: DELETECHECKTODO,
  }
}

export { addTodo, updateTodo, deleteTodo, updateAllTodo, deleteCheckTodo }
