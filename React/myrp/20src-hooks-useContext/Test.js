import React from 'react'
import testContext from './context'

export default function Test() {
  let context = React.useContext(testContext)
  console.log(context)
  return <div>Test组件</div>
}
