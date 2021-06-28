import { Provider } from 'react-redux'
import store from './redux/CreateStore'
import Count from './Count'

export default function App() {
  return (
    <Provider store={store}>
      <Count></Count>
    </Provider>
  )
}
