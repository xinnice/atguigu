import React from 'react'
import testContent from './context'
import Test from './Test'

export default function App() {
  return (
    <testContent.Provider value={{ name: '张三', age: 18 }}>
      <Test></Test>
    </testContent.Provider>
  )
}
