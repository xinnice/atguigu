import { connect } from 'react-redux'
import Footer from '../components/Footer/Footer'
import { updateAllTodo, deleteCheckTodo } from '../redux/actions'

export default connect((state) => ({ list: state.list }), {
  updateAllTodo,
  deleteCheckTodo,
})(Footer)
