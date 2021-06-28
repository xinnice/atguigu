import { connect } from 'react-redux'
import Count from '../Count'
import { increment, decrement } from '../redux/actions'

export default connect((state) => ({ count: state.count }), {
  increment,
  decrement,
})(Count)
