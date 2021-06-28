import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
import Item from './components/Item/Item'
export default class App extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    let result = localStorage.getItem('list')
    let list = JSON.parse(result)
    list &&
      this.setState({
        list,
      })

    PubSub.subscribe('id', (topic, data) => {
      if (data.type === 'update') {
        this.updData(data.id)
      } else {
        this.delData(data.id)
      }
    })
  }

  componentDidUpdate() {
    localStorage.setItem('list', JSON.stringify(this.state.list))
  }

  render() {
    const { list } = this.state
    const done = list.reduce((prev, item) => {
      return item.isDone ? ++prev : prev
    }, 0)
    const all = list.length
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header list={list} addData={this.addData}></Header>
          {list.length ? (
            <div>
              <List list={list}></List>
              <Footer
                done={done}
                all={all}
                updateAll={this.updateAll}
                deleteAll={this.deleteAll}
              ></Footer>
            </div>
          ) : (
            <h1 style={{ color: 'red' }}>恭喜您已完成全部任务!</h1>
          )}
        </div>
      </div>
    )
  }

  getData = (list) => {
    this.setState({
      list,
    })
  }

  addData = (todoName) => {
    let { list } = this.state
    let id = list.length ? list[list.length - 1].id + 1 : 1
    let data = {
      id,
      todoName,
      isDone: false,
    }
    let newList = [...list]
    newList.push(data)
    this.getData(newList)
  }

  updData = (id) => {
    let newList = [...this.state.list]
    newList.forEach((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone
      }
    })
    this.getData(newList)
  }

  updateAll = () => {
    let newList = [...this.state.list]
    let result = newList.every((item) => item.isDone)
    newList.map((item) => (item.isDone = !result))
    this.getData(newList)
  }

  delData = (id) => {
    let { list } = this.state
    let newList = list.filter((item) => item.id !== id)
    this.getData(newList)
  }

  deleteAll = () => {
    let { list } = this.state
    let newList = list.filter((item) => !item.isDone)
    this.getData(newList)
  }
}
