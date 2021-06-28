import { connect } from 'react-redux'
import Message from '../Message'
import { pushAsync } from '../redux/actions'

export default connect(
  (state) => ({
    arr: state.arr,
  }),
  { pushAsync }
)(Message)
