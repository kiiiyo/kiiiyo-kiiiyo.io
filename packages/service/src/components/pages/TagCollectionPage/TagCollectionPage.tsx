import React, { FC } from 'react'
//
import { Domain } from '../../../features'
import { Templates, Organisms } from '../../../components'

/**
 * Interface
 */

export type State = {
  tagCollection: Domain.Tag.TagCollection | null
}

export interface TagCollectionPageProps {
  state: State
}

/**
 * Presenter
 */

export const TagCollectionPage: FC<TagCollectionPageProps> = (props) => {
  const {
    state: { tagCollection },
  } = props
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'TAG' }} />}
    >
      <Organisms.TagCollection state={{ tagCollection }} />
    </Templates.BasicTemplate>
  )
}

export default TagCollectionPage
