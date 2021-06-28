import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
} from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
import Test from './Test'
import './app.css'

export default function App() {
  return (
    <Router>
      <div>
        <NavLink to="/home" activeClassName="show">
          Home
        </NavLink>
        <br />
        <NavLink to="/detail">Detail</NavLink>
        <br />
        <NavLink to="/abc">重定向</NavLink>

        <Switch>
          <Redirect from="/abc" to="home"></Redirect>
          {/* <Route path="/" component={Home}></Route> */}
          <Route path="/home" component={Home}></Route>
          <Route path="/detail/:id?" component={Detail}></Route>
        </Switch>
        <Test></Test>
      </div>
    </Router>
  )
}
