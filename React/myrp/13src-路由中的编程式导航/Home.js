import React, { Component } from 'react'

export default function Home(props) {
  return (
    <div>
      Home
      <button
        onClick={() => {
          // props.history.push('./detail')
          props.history.replace('./detail/100', { name: 'zs', age: 20 })
        }}
      >
        Home按钮
      </button>
    </div>
  )
}
