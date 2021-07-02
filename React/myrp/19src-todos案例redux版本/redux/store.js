import { createStore } from 'redux'
import reducer from './reducer'

let store = createStore(reducer)
store.subscribe(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()))
})

export default store
