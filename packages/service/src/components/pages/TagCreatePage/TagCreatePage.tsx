import React, { FC } from 'react'

import { Templates, Organisms, Atoms } from '../../../components'

/**
 * Interface
 */

//export type State = {}

export type Actions = {
  onGoBackClick: () => void
}

export interface TagCreatePageProps {
  actions: Actions
}

/**
 * Presenter
 */

export const TagCreatePage: FC<TagCreatePageProps> = (props) => {
  const {
    actions: { onGoBackClick },
  } = props
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'TAG' }} />}
    >
      <Organisms.SinglePageHeader
        state={{ pageTitle: 'タグ作成' }}
        actions={{ onGoBackClick }}
      />
      <Atoms.Divider />
      <Atoms.Container maxWidth="lg">記事追加画面</Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagCreatePage
