import './Item.css'

export default function Item(props) {
  let { item, update } = props
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.isDone}
          onChange={() => {
            update('update', item.id)
          }}
        />
        <span className={item.isDone ? 'active' : null}>{item.todoName}</span>
      </label>
      <button
        className="btn btn-danger"
        onClick={() => {
          update('delete', item.id)
        }}
      >
        删除
      </button>
    </li>
  )
}
