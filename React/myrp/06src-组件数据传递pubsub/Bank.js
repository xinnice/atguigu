import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class App extends Component {
  componentDidMount() {
    PubSub.publish('money', 100)
    PubSub.subscribe('eat', (topic, data) => {
      console.log(data)
    })
  }
  render() {
    return <div></div>
  }
}
