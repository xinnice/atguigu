import { useState } from 'react'
import './Header.css'

export default function Header(props) {
  let [todoName, setTodoName] = useState('')
  let { getTodoName } = props

  function inputData(e) {
    setTodoName(e.target.value.trim())
  }

  function addData(e) {
    if (e.keyCode === 13 && todoName) {
      getTodoName(todoName)
      setTodoName('')
    }
  }

  return (
    <div className="todo-header">
      <input
        type="text"
        value={todoName}
        onChange={inputData}
        onKeyDown={addData}
      />
    </div>
  )
}
