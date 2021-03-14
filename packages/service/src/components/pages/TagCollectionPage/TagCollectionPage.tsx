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

export type Actions = {
  onGoToCreateClick: () => void
  onGoToDetailClick: (id: string) => void
}

export interface TagCollectionPageProps {
  state: State
  actions: Actions
}

/**
 * Presenter
 */

export const TagCollectionPage: FC<TagCollectionPageProps> = (props) => {
  const {
    state: { tagCollection },
    actions: { onGoToCreateClick, onGoToDetailClick },
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
            onClick={onGoToCreateClick}
          >
            タグ作成
          </Atoms.Button>
        </Atoms.Box>
      </Atoms.Box>
      <Atoms.Divider />
      {/* Page Body */}
      <Atoms.Container maxWidth="lg">
        <Atoms.Box py={4}>
          <Organisms.TagCollection
            state={{ tagCollection }}
            actions={{ onGoToDetailClick }}
          />
        </Atoms.Box>
      </Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagCollectionPage
