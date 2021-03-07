import React, { FC } from 'react'

import { Templates, Organisms } from '../../../components'

/**
 * Presenter
 */

export const ArticleCollectionPagePresenter: FC = () => {
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'ARTICLE' }} />}
    >
      記事画面
    </Templates.BasicTemplate>
  )
}

/**
 * Merge
 */

export const ArticleCollectionPage: FC = () => {
  return <ArticleCollectionPagePresenter />
}

export default ArticleCollectionPage
