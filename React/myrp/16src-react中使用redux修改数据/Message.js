import React from 'react'
export default function Message(props) {
  return (
    <div>
      <h1>{props.arr}</h1>
      <button
        onClick={() => {
          props.push(600)
        }}
      >
        添加
      </button>
    </div>
  )
}
