import React, { Component } from 'react'
import Login from './Login'
import Register from './Register'
import WithForm from './WithForm'

export default class App extends Component {
  render() {
    let WithLogin = WithForm(Login)
    let WithRegister = WithForm(Register)
    return (
      <div>
        <WithLogin></WithLogin>
        <WithRegister></WithRegister>
      </div>
    )
  }
}
