import React, { FC } from 'react'

import { Templates, Organisms } from '../../../components'

/**
 * Presenter
 */

export const CategoryCollectionPagePresenter: FC = () => {
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'CATEGORY' }} />}
    >
      カテゴリ
    </Templates.BasicTemplate>
  )
}

/**
 * Merge
 */

export const CategoryCollectionPage: FC = () => {
  return <CategoryCollectionPagePresenter />
}

export default CategoryCollectionPage
