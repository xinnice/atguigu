import React, { Component } from 'react'
import PubSub from 'pubsub-js'
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
    let id=this.props.data.id
    PubSub.publish('id',{type:'update',id} )
  }

  delete = () => {
    let id=this.props.data.id
    PubSub.publish('id',{type:'delete',id} )
  }
}
