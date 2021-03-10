import React, { FC } from 'react'

import { Templates, Organisms } from '../../../components'

/**
 * Presenter
 */

export const TagCollectionPagePresenter: FC = () => {
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'TAG' }} />}
    >
      <Organisms.TagCollection />
    </Templates.BasicTemplate>
  )
}

/**
 * Merge
 */

export const TagCollectionPage: FC = () => {
  return <TagCollectionPagePresenter />
}

export default TagCollectionPage
