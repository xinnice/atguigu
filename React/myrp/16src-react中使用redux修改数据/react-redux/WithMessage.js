import { connect } from 'react-redux'
import Message from '../Message'
import { push } from '../redux/actions'

export default connect(
  (state) => ({
    arr: state.arr,
  }),
  { push }
)(Message)
