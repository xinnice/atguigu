import React, { Component } from 'react'
import WithItem from '../../containers/WithItem'
import './List.css'
export default function List(props) {
  return (
    <ul className="todo-main">
      {props.list.map((item) => {
        return <WithItem key={item.id} item={item}></WithItem>
      })}
    </ul>
  )
}
