import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'

export default class List extends Component {
  render() {
    const { list, updData, delData } = this.props
    return (
      <ul className="todo-main">
        {list.map((item) => (
          <Item
            key={item.id}
            data={item}
            updData={updData}
            delData={delData}
          ></Item>
        ))}
      </ul>
    )
  }
}
