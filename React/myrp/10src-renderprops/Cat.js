import React, { Component } from 'react'
import CatUrl from './assets/cat.gif'
export default class Cat extends Component {
  render() {
    let { x, y } = this.props.data
    return (
      <div>
        <img
          src={CatUrl}
          alt=""
          style={{ position: 'absolute', left: x + 200, top: y + 50}}
        />
      </div>
    )
  }
}
