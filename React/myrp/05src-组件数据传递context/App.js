import React, { Component } from 'react'
import testContext from './Context'
import Far from './Far'
export default class App extends Component {
  state = {
    money: 100,
  }
  render() {
    return (
      <testContext.Provider value={this.state.money}>
        <div>
          <Far></Far>
        </div>
      </testContext.Provider>
    )
  }
}
