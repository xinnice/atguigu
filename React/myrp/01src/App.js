import React from 'react'
import Count from './components/count'
import Test from './components/test'
import './components/count/index.css'
// function App() {
//   return <h1>React天下第一牛逼!!!!</h1>
// }

class App extends React.Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div class='con'>
        <Count count={this.state.count}></Count>
        <Test count={this.state.count}></Test>
        <button id='btn'
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            })
          }}
        >
          点我
        </button>
      </div>
    )
  }
}

export default App
