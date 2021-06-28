import React, { Component } from 'react'

export default class Login extends Component {
//   state = {
//     username: '',
//     password: '',
//   }

//   fn = (type) => (e) => {
//     this.setState({
//       [type]: e.target.value,
//     })
//   }

  render() {
    let { username, password, fn } = this.props
    return (
      <div>
        <h2>登录</h2>
        用户名:
        <input
          type="text"
          value={username}
          onChange={fn('username')}
        /><br/>
        密码:
        <input
          type="password"
          value={password}
          onChange={fn('password')}
        /><br/>
        <button type="submit">登录</button>
      </div>
    )
  }
}
