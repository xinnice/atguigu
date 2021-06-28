import { withRouter } from 'react-router-dom'
function Test(props) {
  return (
    <div>
      <button
        onClick={() => {
          console.log(props)
        }}
      >
        Test按钮
      </button>
    </div>
  )
}

export default withRouter(Test)
