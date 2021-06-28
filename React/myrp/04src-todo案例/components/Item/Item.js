import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  render() {
    const { data } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={data.isDone} onChange={this.update} />
          <span className={data.isDone ? 'done' : ''}>{data.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.delete}>
          删除
        </button>
      </li>
    )
  }

  update = () => {
    this.props.updData(this.props.data.id)
  }

  delete = () => {
    this.props.delData(this.props.data.id)
  }
}
