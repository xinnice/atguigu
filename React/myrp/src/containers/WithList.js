import { connect } from 'react-redux'
import { asyncGetData } from '../redux/actions'
import List from '../components/List'

export default connect((state) => ({ list: state.list }), { asyncGetData })(List)
