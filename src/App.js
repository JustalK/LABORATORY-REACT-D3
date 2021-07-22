import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ROUTE_EXPERIENCE_1, ROUTE_EXPERIENCE_2 } from '@constants/routes'
import Experience1 from '@pages/Experience1'
import Experience2 from '@pages/Experience2'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTE_EXPERIENCE_2}>
          <Experience2 />
        </Route>
        <Route path={ROUTE_EXPERIENCE_1}>
          <Experience1 />
        </Route>
      </Switch>
    </Router>
  )
}
