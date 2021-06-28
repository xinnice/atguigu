import React from 'react'
import List from './List'

class App extends React.Component {
  state = {
    list: ['a', 'b', 'c'],
  }
  render() {
    return <List list={this.state.list}></List>
  }
}

export default App
