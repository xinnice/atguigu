import React from 'react'
import WithHeader from './containers/WithHeader'
import WithList from './containers/WithList'
import WithFooter from './containers/WithFooter'

export default function Todos(props) {
  let { list } = props
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <WithHeader></WithHeader>
        {list.length ? (
          <div>
            <WithList></WithList>
            <WithFooter></WithFooter>
          </div>
        ) : (
          <h1 style={{ color: 'red' }}>恭喜您全部任务已完成</h1>
        )}
      </div>
    </div>
  )
}
