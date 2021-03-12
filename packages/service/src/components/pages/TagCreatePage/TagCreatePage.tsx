import React, { FC } from 'react'
import { UseFormMethods } from 'react-hook-form'
//
import { Domain } from '../../../features'
import { Templates, Organisms, Atoms } from '../../../components'

/**
 * Interface
 */

export type State = {
  formState: UseFormMethods['formState']
  formErrors: UseFormMethods['errors']
}

export type Actions = {
  handleRegister: UseFormMethods['register']
  handleWatch: UseFormMethods['watch']
  handleSubmit: UseFormMethods['handleSubmit']
  onGoBackClick: () => void
  onTagCreateFormSubmit: (form: Domain.Tag.TagCreateForm) => void
}

export interface TagCreatePageProps {
  state: State
  actions: Actions
}

/**
 * Presenter
 */

export const TagCreatePage: FC<TagCreatePageProps> = (props) => {
  const {
    state: { formState, formErrors },
    actions: {
      onGoBackClick,
      handleRegister,
      handleWatch,
      handleSubmit,
      onTagCreateFormSubmit,
    },
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
      <Atoms.Container maxWidth="lg">
        <Atoms.Box py={4}>
          <Organisms.TagCreateForm
            state={{ formState, formErrors }}
            actions={{
              handleRegister,
              handleWatch,
              handleSubmit,
              onTagCreateFormSubmit,
            }}
          />
        </Atoms.Box>
      </Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagCreatePage
