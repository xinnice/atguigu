import React from 'react'

export default function List(props) {
  let newList = [...props.list]
  if (props.flag === 'child') {
    newList = props.list.filter((item) => item.age < 18)
  }
  return (
    <div style={{ marginLeft: 500 }}>
      <button
        style={{ width: 100 }}
        onClick={() => {
          props.asyncGetData()
        }}
      >
        获取数据
      </button>
      <button
        style={{ width: 100 }}
        onClick={() => {
          props.setFlag('child')
        }}
      >
        age小于18
      </button>
      <ul>
        {newList.map((item, index) => (
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
