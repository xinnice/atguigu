import React, { Component } from 'react'
import Mouse from './Mouse'
import Cat from './Cat'
import Position from './Position'

export default class App extends Component {
  render() {
    return (
      <>
      <h1>猫捉老鼠</h1>
        <Position render={(data) => <Mouse data={data} />}></Position>
        <Position render={(data) => <Cat data={data} />}></Position>
      </>
    )
  }
}
