import React, { FC } from 'react'
//
import { Domain } from '../../../features'
import { Templates, Organisms, Atoms } from '../../../components'

/**
 * Interface
 */

//export type State = {}

export type Actions = {
  onGoBackClick: () => void
  onTagFormSubmit: (form: Domain.Tag.TagCreateForm) => void
}

export interface TagCreatePageProps {
  actions: Actions
}

/**
 * Presenter
 */

export const TagCreatePage: FC<TagCreatePageProps> = (props) => {
  const {
    actions: { onGoBackClick, onTagFormSubmit },
  } = props
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'TAG' }} />}
    >
      <Organisms.SinglePageHeader
        state={{ pageTitle: 'Tag create' }}
        actions={{ onGoBackClick }}
      />
      <Atoms.Divider />
      <Atoms.Container maxWidth="lg">
        <Atoms.Box py={4}>
          <Organisms.TagCreateForm
            actions={{
              handleFormSubmit: onTagFormSubmit,
            }}
          />
        </Atoms.Box>
      </Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagCreatePage
