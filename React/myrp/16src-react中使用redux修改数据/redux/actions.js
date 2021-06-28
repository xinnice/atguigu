import { INCREMENT, DECREMENT, PUSH } from './constance'

function increment() {
  return {
    type: INCREMENT,
  }
}

function decrement() {
  return {
    type: DECREMENT,
  }
}

function push(data) {
  return {
    type: PUSH,
    data,
  }
}

export {increment,decrement,push}
