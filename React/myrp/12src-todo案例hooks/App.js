import { useState } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App() {
  let todos = JSON.parse(localStorage.getItem('todos'))
  if (!todos) {
    todos = []
  }
  let [list, setList] = useState(todos)

  let all = list.length
  let done = list.filter((item) => item.isDone).length

  function getTodoName(todoName) {
    let id = list.length ? list[list.length - 1].id + 1 : 1
    let newList = [...list]
    let data = { id, todoName, isDone: false }
    newList.push(data)
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  function update(type, id) {
    let newList = null
    if (type === 'update') {
      newList = [...list]
      newList.forEach((item) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
      })
    } else {
      newList = list.filter((item) => item.id !== id)
    }
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  function updateAll() {
    let result = list.every((item) => item.isDone)
    let newList = list.map((item) => {
      item.isDone = !result
      return item
    })
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  function deleteAll() {
    let newList = list.filter((item) => !item.isDone)
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header getTodoName={getTodoName}></Header>
        {list.length ? (
          <div>
            <List>
              {list.map((item) => (
                <Item key={item.id} item={item} update={update}></Item>
              ))}
            </List>
            <Footer
              all={all}
              done={done}
              updateAll={updateAll}
              deleteAll={deleteAll}
            ></Footer>
          </div>
        ) : (
          <h1 color={{ color: 'red' }}>恭喜您全部任务已完成</h1>
        )}
      </div>
    </div>
  )
}
