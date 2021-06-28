import { connect } from 'react-redux'

function Count(props) {
  return (
    <div style={{ width: 500, marginLeft: 300 }}>
      <h1>React中使用Redux</h1>
      <div>{props.count}</div>
      <button
        style={{ width: 50 }}
        onClick={() => {
          props.dispatch({
            type: 'INCREMENT',
          })
        }}
      >
        +
      </button>
      <br />
      <button
        style={{ width: 50, marginTop: 10 }}
        onClick={() => {
          props.dispatch({
            type: 'DECREMENT',
          })
        }}
      >
        -
      </button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}

export default connect(mapStateToProps)(Count)
