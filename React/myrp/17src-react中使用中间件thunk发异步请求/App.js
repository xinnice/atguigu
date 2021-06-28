import { Provider } from 'react-redux'
import store from './redux/CreateStore'
import WithMessage from './react-redux/WithMessage'

export default function App() {
  return (
    <Provider store={store}>
      <div style={{ width: 600, marginLeft: 300 }}>
        <WithMessage></WithMessage>
      </div>
    </Provider>
  )
}
