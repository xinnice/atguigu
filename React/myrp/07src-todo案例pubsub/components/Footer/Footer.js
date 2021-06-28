import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    const { done, all, updateAll } = this.props
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={updateAll} checked={done === all} />
        </label>
        <span>
          <span>已完成 {done}</span> / 全部 {all}
        </span>
        <button className="btn btn-danger" onClick={this.deleteAll()}>
          清除已完成任务
        </button>
      </div>
    )
  }

  deleteAll = () => () => {
    const { deleteAll } = this.props
    deleteAll()
  }
}
