import React, { Component } from 'react'
import './Footer.css'

export default function Footer(props) {
  let { list, updateAllTodo, deleteCheckTodo } = props
  let all = list.length
  let done = list.filter((item) => item.isDone).length
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={all === done}
          onChange={() => {
            updateAllTodo()
          }}
        />
      </label>
      <span>
        <span>已完成 {done}</span> / 全部 {all}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteCheckTodo()
        }}
      >
        清除已完成任务
      </button>
    </div>
  )
}
