import React, { Component } from 'react'
import './Item.css'
export default function Item(props) {
  const { item } = props
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.isDone}
          onChange={() => {
            props.updateTodo(item.id)
          }}
        />
        <span className={item.isDone ? 'active' : ''}>{item.todoName}</span>
      </label>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteTodo(item.id)
        }}
      >
        删除
      </button>
    </li>
  )
}
