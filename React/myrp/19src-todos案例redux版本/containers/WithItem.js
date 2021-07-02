import { connect } from 'react-redux'
import Item from '../components/Item/Item'
import { updateTodo, deleteTodo } from '../redux/actions'

export default connect((state, props) => ({ item: { ...props.item } }), {
  updateTodo,
  deleteTodo,
})(Item)
