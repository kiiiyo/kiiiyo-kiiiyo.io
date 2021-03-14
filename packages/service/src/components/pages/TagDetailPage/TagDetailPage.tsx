import { FC } from 'react'
//
import { Domain } from '../../../features'
import { Templates, Organisms, Atoms } from '../../../components'

/**
 * Interface
 */

export type State = {
  tag: Domain.Tag.TagDetail | null
}

export type Actions = {
  onGoBackClick: () => void
}

export interface TagDetailPageProps {
  state: State
  actions: Actions
}

/**
 * Presenter
 */

export const TagDetailPage: FC<TagDetailPageProps> = (props) => {
  const {
    state: { tag },
    actions: { onGoBackClick },
  } = props
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'TAG' }} />}
    >
      <Organisms.SinglePageHeader
        state={{ pageTitle: 'Tag detail' }}
        actions={{ onGoBackClick }}
      />
      <Atoms.Divider />
      <Atoms.Container maxWidth="lg">
        <Atoms.Box py={4}>
          {tag && <Organisms.TagDetail state={{ tag }} />}
        </Atoms.Box>
      </Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagDetailPage
