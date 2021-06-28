import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: '',
  }

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          value={this.state.todoName}
          onChange={this.change}
          onKeyDown={this.add}
        />
      </div>
    )
  }
  change = (e) => {
    this.setState({
      todoName: e.target.value.trim(),
    })
  }

  add = (e) => {
    let { todoName } = this.state
    if (e.keyCode === 13) {
      if (!todoName) {
        return
      }
      this.props.addData(todoName)
      this.setState({
        todoName: '',
      })
    }
  }
}
