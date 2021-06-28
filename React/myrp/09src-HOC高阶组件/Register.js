import React, { Component } from 'react'

export default class Register extends Component {
//   state = {
//     username: '',
//     password: '',
//     respassword: '',
//   }

//   fn = (type) => (e) => {
//     this.setState({
//       [type]: e.target.value,
//     })
//   }

  render() {
    let { username, password,respassword, fn } = this.props
    return (
      <div>
        <h2>注册</h2>
        用户名:
        <input
          type="text"
          value={username}
          onChange={fn('username')}
        />
        <br />
        密码:
        <input
          type="password"
          value={password}
          onChange={fn('password')}
        />
        <br />
        确认密码:
        <input
          type="password"
          value={respassword}
          onChange={fn('respassword')}
        />
        <br />
        <button type="submit">注册</button>
      </div>
    )
  }
}
 