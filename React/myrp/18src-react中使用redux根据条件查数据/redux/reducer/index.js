import { combineReducers } from 'redux'
import getDataReducer from './getDataReducer'
import setFlagReducer from './setFlagReducer'

export default combineReducers({
  getDataReducer,
  setFlagReducer,
})
