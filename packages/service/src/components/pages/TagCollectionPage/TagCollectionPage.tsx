import React, { FC } from 'react'
//
import { Domain } from '../../../features'
import { Templates, Organisms, Atoms } from '../../../components'

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
      {/* Page Header  */}
      <Atoms.Box
        p={3}
        display="flex"
        flexDirection="row"
        justifyContent="start"
      >
        <Atoms.Typography variant="h5" component="h1">
          タグ管理
        </Atoms.Typography>

        <Atoms.Box ml="auto">
          <Atoms.Button
            variant="outlined"
            startIcon={<Atoms.AddIcon />}
            onClick={() => {
              console.log('a')
            }}
          >
            タグ作成
          </Atoms.Button>
        </Atoms.Box>
      </Atoms.Box>
      <Atoms.Divider />
      {/* Page Body */}
      <Atoms.Container maxWidth="lg">
        <Atoms.Box py={4}>
          <Organisms.TagCollection state={{ tagCollection }} />
        </Atoms.Box>
      </Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagCollectionPage
