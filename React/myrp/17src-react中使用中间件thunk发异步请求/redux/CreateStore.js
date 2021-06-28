import { createStore, applyMiddleware } from 'redux'
import reducer from './Reducer'
import thunk from 'redux-thunk'

export default createStore(reducer, applyMiddleware(thunk))
