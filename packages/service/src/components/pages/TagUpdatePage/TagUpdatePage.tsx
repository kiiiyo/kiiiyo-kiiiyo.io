import { FC } from 'react'
//
import { Templates, Organisms, Atoms } from '../../../components'

/**
 * Interface
 */

export type State = {}

export type Actions = {
  onGoBackClick: () => void
}

export interface TagUpdatePageProps {
  state: State
  actions: Actions
}

/**
 * Presenter
 */

export const TagUpdatePage: FC<TagUpdatePageProps> = (props) => {
  const {
    actions: { onGoBackClick },
  } = props
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'TAG' }} />}
    >
      <Organisms.SinglePageHeader
        state={{
          pageTitle: 'Tag update',
        }}
        actions={{ onGoBackClick }}
      />
      <Atoms.Divider />
      <Atoms.Container maxWidth="lg">test</Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagUpdatePage
