import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

const Home = React.lazy(() => import('./Home'))
const WithTodos = React.lazy(() => import('./containers/WithTodos'))

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>组件加载中......</div>}>
        <Router>
          <Link to="/home">首页</Link>
          <Link to="/todos">任务列表</Link>
          <Route path="/" component={WithTodos} exact></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/todos" component={WithTodos}></Route>
        </Router>
      </Suspense>
    </Provider>
  )
}
