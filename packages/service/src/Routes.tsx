import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
//
import {
  DashboardPageContainer,
  ArticleCollectionPageContainer,
  CategoryCollectionPageContainer,
  TagCollectionPageContainer,
  TagCreatePageContainer,
  TagDetailPageContainer,
  TagUpdatePageContainer,
} from './containers'

export const PrivateRouter: FC = () => {
  //
  return (
    <Switch>
      <Route exact path={['/', '/dashboard']}>
        <DashboardPageContainer />
      </Route>
      <Route exact path="/articles">
        <ArticleCollectionPageContainer />
      </Route>
      <Route exact path="/categories">
        <CategoryCollectionPageContainer />
      </Route>
      <Route exact path="/tags">
        <TagCollectionPageContainer />
      </Route>
      <Route exact path="/tags/create">
        <TagCreatePageContainer />
      </Route>
      <Route exact path="/tags/:tagId">
        <TagDetailPageContainer />
      </Route>
      <Route exact path="/tags/:tagId/edit">
        <TagUpdatePageContainer />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}
