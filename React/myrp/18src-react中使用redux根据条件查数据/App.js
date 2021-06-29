import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import WithList from './containers/WithList'

export default function App() {
  return (
    <Provider store={store}>
      <WithList></WithList>
    </Provider>
  )
}
