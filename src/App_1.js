import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Student from './pages/Student'

const App = () => {
  const loginStatus = '已登入'

  return (
    <>
      <Router>
        <>
          <Link to="/">首頁</Link>
          <Link to="/student">學生</Link>

          <Switch>
            {/* <Route exact path="/" component={Home}/> */}
            <Route
              exact
              path="/"
              render={props => {
                return <Home {...props} loginStatus={loginStatus} />
              }}
            />
            <Route
              path="/student/:id?"
              render={props => {
                return <Student {...props} loginStatus={loginStatus} />
              }}
            />
          </Switch>
        </>
      </Router>
    </>
  )
}

export default App
