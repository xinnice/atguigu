import { increment, decrement } from './redux/actions'

export default function Count(props) {
  return (
    <div>
      <h1>React中使用Redux</h1>
      <div>{props.count}</div>
      <button
        style={{ width: 50 }}
        onClick={() => {
          props.increment()
        }}
      >
        +
      </button>
      <br />
      <button
        style={{ width: 50, marginTop: 10 }}
        onClick={() => {
          props.decrement()
        }}
      >
        -
      </button>
    </div>
  )
}
