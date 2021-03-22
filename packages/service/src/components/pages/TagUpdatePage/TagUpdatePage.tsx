import { FC } from 'react'
//
import { Domain } from '../../../features'
import { Templates, Organisms, Atoms } from '../../../components'

/**
 * Interface
 */

export type State = {
  tag: Domain.Tag.TagDetail | null
  dialogDisplayCondition: boolean
}

export type Actions = {
  onSetForm: (form: Domain.Tag.TagUpdateForm) => void
  onTagFormSubmit: () => void
  onGoBackClick: () => void
  handleHideDialog: () => void
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
    state: { tag, dialogDisplayCondition },
    actions: { onGoBackClick, onTagFormSubmit, onSetForm, handleHideDialog },
  } = props

  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'TAG' }} />}
    >
      <Organisms.ConfirmDialog
        state={{
          title: 'Tag update',
          description: 'Do you want to update your tag information?',
          disagreeButtonText: 'Cancel',
          agreeButtonText: 'OK',
          displayCondition: dialogDisplayCondition,
        }}
        actions={{
          handleAgree: onTagFormSubmit,
          handleDisagree: handleHideDialog,
          handleClose: handleHideDialog,
        }}
      />
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
                handleFormSubmit: onSetForm,
              }}
            />
          )}
        </Atoms.Box>
      </Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagUpdatePage
