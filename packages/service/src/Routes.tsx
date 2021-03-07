import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
//
import { DashboardContainer } from './containers'

export const PrivateRouter: FC = () => {
  //
  return (
    <Switch>
      <Route exact path={['/', '/dashboard']}>
        <DashboardContainer />
      </Route>
      <Route exact path="/articles">
        <div>Article</div>
      </Route>
      <Route exact path="/categories">
        <div>Categories</div>
      </Route>
      <Route exact path="/tags">
        <div>Categories</div>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}
