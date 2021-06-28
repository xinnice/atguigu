import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Son extends Component {
  state = {
    money: 0,
  }
  componentDidMount() {
    PubSub.subscribe('money', (topic, data) => {
      this.setState({
        money: data,
      })
    })
  }
  render() {
    return <div>{this.state.money}</div>
  }
}
