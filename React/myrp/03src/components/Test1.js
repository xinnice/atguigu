import React, { Component } from 'react'

export default class Test extends Component {
  state = {
    username: 'my',
    area: '',
    select: '2',
    check: true,
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => {
            this.fn(e, 'username')
          }}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={this.state.area}
          onChange={(e) => {
            this.fn(e, 'area')
          }
        }
        ></textarea>
        <select
          name=""
          id=""
          value={this.state.select}
          onChange={(e) => {
            this.fn(e, 'select')
          }}
        >
          <option value="1">eat</option>
          <option value="2">sleep</option>
          <option value="3">code</option>
        </select>
        <input
          type="checkbox"
          checked={this.state.check}
          onChange={(e) => {
            this.fn(e, 'check')
          }}
        />
        <button
          onClick={() => {
            console.log(this.state.username)
          }}
        >
          点我
        </button>
      </div>
    )
  }

  fn = (e, key) => {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({ [key]: value })
  }
}
