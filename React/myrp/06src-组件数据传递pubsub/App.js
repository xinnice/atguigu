import React, { Component } from 'react'
import Bank from './Bank'
import Far from './Far'
export default class App extends Component {
  state = {
    money: 100,
  }
  render() {
    return (
      <div>
        <Far></Far>
        <Bank></Bank>
      </div>
    )
  }
}
