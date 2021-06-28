import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Footer.css'
export default function Footer(props) {
  let { done, all, updateAll, deleteAll } = props
  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={done === all}
          onChange={() => {
            updateAll()
          }}
        />
      </label>
      <span>
        <span>已完成 {done}</span> / 全部 {all}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteAll()
        }}
      >
        清除已完成任务
      </button>
    </div>
  )
}
