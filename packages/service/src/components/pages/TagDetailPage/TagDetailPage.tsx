import { FC } from 'react'
//
import { Domain } from '../../../features'
import { Templates, Organisms, Atoms } from '../../../components'

/**
 * Interface
 */

//export type State = {}

export type Actions = {
  onGoBackClick: () => void
}

export interface TagDetailPageProps {
  actions: Actions
}

/**
 * Presenter
 */

export const TagDetailPage: FC<TagDetailPageProps> = (props) => {
  const {
    actions: { onGoBackClick },
  } = props
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'TAG' }} />}
    >
      <Organisms.SinglePageHeader
        state={{ pageTitle: 'タグ' }}
        actions={{ onGoBackClick }}
      />
      <Atoms.Divider />
      <Atoms.Container maxWidth="lg">
        <Atoms.Box py={4}>
          <Organisms.TagDetail state={{}} />
        </Atoms.Box>
      </Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagDetailPage
