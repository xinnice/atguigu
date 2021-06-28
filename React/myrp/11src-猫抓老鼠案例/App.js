import React, { Component } from 'react'
import Mouse from './Mouse'
import Cat from './Cat'

export default class App extends Component {
  render() {
    return (
      <>
      <h1>猫捉老鼠</h1>
        <Mouse></Mouse>
        <Cat></Cat>
      </>
    )
  }
}
