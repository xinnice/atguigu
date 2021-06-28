import React, { Component } from 'react'

export default class Test extends Component {
  testRef = React.createRef()
  render() {
    return (
      <div>
        <input type="text" ref={this.testRef} />
        <button
          onClick={() => {
            console.log(this.testRef.current.value)
          }}
        >
          点我
        </button>
      </div>
    )
  }
}
