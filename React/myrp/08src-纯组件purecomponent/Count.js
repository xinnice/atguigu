import React, { PureComponent } from 'react'

export default class Count extends PureComponent {
  state = {
    count: 0,
    obj: { msg: '你好' },
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  render() {
    console.log('count--', this.state.count)
    return (
      <>
        <div>{this.state.count}</div>
        <div>{this.state.obj.msg}</div>
        <button
          onClick={() => {
            let newObj = {...this.state.obj}
            newObj.msg = '漂亮'
            this.setState({
              count: this.getRandomIntInclusive(1, 3),
              obj:newObj
            })
          }}
        >
          点我
        </button>
      </>
    )
  }
}
