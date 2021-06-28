import React from 'react'

export default function List(props) {
  return (
    <div style={{marginLeft:500}}>
      <button style={{width:100}}
        onClick={() => {
          props.asyncGetData()
        }}
      >获取数据</button>
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>
            <h4>{item.name}</h4>
            <h5>{item.age}</h5>
            <h5>{item.info}</h5>
          </li>
        ))}
      </ul>
    </div>
  )
}
