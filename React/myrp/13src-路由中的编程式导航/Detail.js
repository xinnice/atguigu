import React from 'react'

export default function Detail(props) {
  return (
    <div>
      Detail
      <button
        onClick={() => {
          console.log(props.match.params)
          console.log(props.location.state)
        }}
      >
        Detail按钮
      </button>
    </div>
  )
}
