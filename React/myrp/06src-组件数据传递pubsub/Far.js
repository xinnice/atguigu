import React, { Component } from 'react'
import PubSub, { publish } from 'pubsub-js'
import Son from './Son'
export default class Far extends Component {
  componentDidMount() {
    this.token = PubSub.subscribe('money', (topic, data) => {
      console.log('Far--', data)
    })
  }
  render() {
    return (
      <div>
        <Son></Son>
        <button
          onClick={() => {
            PubSub.publish('eat', 200)
          }}
        >
          Far订阅
        </button>
        <button
          onClick={() => {
            PubSub.unsubscribe(this.token)
          }}
        >
          Far取消订阅
        </button>
      </div>
    )
  }
}
