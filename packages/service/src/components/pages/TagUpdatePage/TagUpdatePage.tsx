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
  onTagFormSubmit: (form: Domain.Tag.TagUpdateForm) => void
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
    state: { tag },
    actions: { onGoBackClick, onTagFormSubmit },
  } = props

  console.log(tag)
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
      <Atoms.Container maxWidth="lg">
        <Atoms.Box py={4}>
          {tag && (
            <Organisms.TagUpdateForm
              state={{ tag }}
              actions={{
                handleFormSubmit: onTagFormSubmit,
              }}
            />
          )}
        </Atoms.Box>
      </Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagUpdatePage
