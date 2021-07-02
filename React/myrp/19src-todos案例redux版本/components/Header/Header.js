import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    todoName: '',
  }
  fn = (e) => {
    this.setState({
      todoName: e.target.value.trim(),
    })
  }

  keyUpHandle = (e) => {
    if (e.keyCode === 13 && this.state.todoName) {
      this.props.addTodo(this.state.todoName)
      this.setState({
        todoName: '',
      })
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          value={this.state.todoName}
          onChange={this.fn}
          onKeyUp={this.keyUpHandle}
        />
      </div>
    )
  }
}
