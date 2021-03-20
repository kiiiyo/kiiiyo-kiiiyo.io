import { FC } from 'react'
import { UseFormMethods } from 'react-hook-form'

//
import { Domain } from '../../../features'
import { Atoms, Molecules } from '../..'
import { useTagUpdateFormm } from './hooks'

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
  handleGetValues: UseFormMethods['getValues']
  handleReset: UseFormMethods['reset']
  handleFormSubmit: (form: Domain.Tag.TagUpdateForm) => void
}

export interface TagUpdateFormPresenterProps {
  state: State
  actions: Actions
}

export interface TagUpdateFormProps {
  state: {
    tag: Domain.Tag.TagDetail
  }
  actions: {
    handleFormSubmit: (form: Domain.Tag.TagUpdateForm) => void
  }
}

/**
 * Presenter
 */

export const TagUpdateFormPresenter: FC<TagUpdateFormPresenterProps> = (
  props
) => {
  const {
    state: { formState },
    actions: {
      handleSubmit,
      handleRegister,
      handleFormSubmit,
      handleGetValues,
    },
  } = props

  const { isValid } = formState
  const isSubmit = isValid === true

  handleRegister({ name: 'id', type: 'custom' })

  return (
    <Atoms.Paper elevation={2}>
      <Atoms.Card>
        <Atoms.CardHeader title="タグ作成フォーム" />
        <Atoms.Divider />
        <Atoms.CardContent>
          <Atoms.Box p={1}>
            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'ID',
                }}
              >
                <Atoms.TextField
                  id="id"
                  name="id"
                  variant="outlined"
                  placeholder="Tag id"
                  disabled={true}
                  value={handleGetValues('id')}
                  fullWidth
                />
              </Molecules.FormField>
            </Atoms.Box>
            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Name',
                }}
              >
                <Atoms.TextField
                  id="name"
                  name="name"
                  variant="outlined"
                  placeholder="Tag name"
                  inputRef={handleRegister({ required: true })}
                  fullWidth
                />
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Slug',
                }}
              >
                <Atoms.TextField
                  id="slug"
                  name="slug"
                  variant="outlined"
                  placeholder="Tag slug"
                  inputRef={handleRegister({ required: true })}
                  fullWidth
                />
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Description',
                }}
              >
                <Atoms.TextField
                  id="description"
                  name="description"
                  variant="outlined"
                  placeholder="Tag description"
                  inputRef={handleRegister()}
                  fullWidth
                />
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Sort Order',
                }}
              >
                <Atoms.TextField
                  id="sortOrder"
                  name="sortOrder"
                  variant="outlined"
                  type="number"
                  placeholder="Tag sortOrder"
                  inputRef={handleRegister({ required: true })}
                  fullWidth
                />
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={2}>
              <Molecules.FormField
                state={{
                  label: 'Status',
                }}
              >
                <Molecules.Select
                  state={{ name: 'status' }}
                  actions={{ ref: handleRegister({ required: true }) }}
                >
                  <option value="">選択してください</option>
                  <option value={Domain.Tag.TagStatusEnum.DRAFT}>DRAFT</option>
                  <option value={Domain.Tag.TagStatusEnum.PENDING}>
                    PENDING
                  </option>
                  <option value={Domain.Tag.TagStatusEnum.PUBLISH}>
                    PUBLISH
                  </option>
                </Molecules.Select>
              </Molecules.FormField>
            </Atoms.Box>
          </Atoms.Box>
        </Atoms.CardContent>
        <Atoms.Divider />
        <Atoms.CardActions>
          <Atoms.Box p={2} ml="auto">
            <Atoms.Button
              variant="contained"
              color="primary"
              disabled={!isSubmit}
              onClick={handleSubmit(handleFormSubmit)}
            >
              Update
            </Atoms.Button>
          </Atoms.Box>
        </Atoms.CardActions>
      </Atoms.Card>
    </Atoms.Paper>
  )
}

/**
 * Merge
 */

export const TagUpdateForm: FC<TagUpdateFormProps> = (props) => {
  const {
    state: { tag },
    actions: { handleFormSubmit },
  } = props
  const {
    state: { formState, formErrors },
    actions: {
      handleRegister,
      handleGetValues,
      handleWatch,
      handleSubmit,
      handleReset,
    },
  } = useTagUpdateFormm(tag)
  return (
    <TagUpdateFormPresenter
      state={{ formState, formErrors }}
      actions={{
        handleGetValues,
        handleRegister,
        handleWatch,
        handleSubmit,
        handleFormSubmit,
        handleReset,
      }}
    />
  )
}

export default TagUpdateForm
