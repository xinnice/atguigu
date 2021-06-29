import { connect } from 'react-redux'
import { asyncGetData, setFlag } from '../redux/actions'
import List from '../components/List'

export default connect((state) => ({ list: state.getDataReducer.list,flag:state.setFlagReducer.flag }), {
  asyncGetData,
  setFlag,
})(List)
