import { useState, useCallback, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
//
import { Domain, UseCase, Hooks } from '../../features'
// import { UseCase, Hooks } from '../../features'

type TagUpdateUrlParams = {
  tagId: string
}

export const useTagUpdatePageContainer = () => {
  /**
   * Hooks
   */

  const {
    actions: { handleShowNotice },
  } = Hooks.Notice.useNotice()

  const {
    state: { dialogDisplayCondition },
    actions: { handleHideDialog, handleShowDialog },
  } = Hooks.Dialog.useDialog()

  /**
   * Variables
   */

  const [tag, setTag] = useState<Domain.Tag.TagDetail | null>(null)
  const [form, setForm] = useState<Domain.Tag.TagUpdateForm | null>(null)
  const history = useHistory()
  const { tagId } = useParams<TagUpdateUrlParams>()

  const handleFetchTag = useCallback(() => {
    UseCase.Tag.tagDetail(tagId).then((data) => {
      setTag(data)
    })
  }, [tagId, setTag])

  useEffect(() => {
    handleFetchTag()
  }, [handleFetchTag])

  /**
   * Actions
   */

  const onTagFormSubmit = useCallback(() => {
    if (form) {
      UseCase.Tag.updateTag(form)
        .then(() => {
          handleShowNotice({
            type: 'success',
            message: 'Updated tags',
          })
        })
        .catch(() => {
          handleShowNotice({
            type: 'error',
            message: 'Failed to update tag',
          })
        })
        .finally(() => {
          history.push(`/tags/${form.id}`)
        })
    }
  }, [form, handleShowNotice, history])

  const onSetForm = useCallback(
    (form: Domain.Tag.TagUpdateForm) => {
      setForm(form)
      handleShowDialog()
    },
    [setForm, handleShowDialog]
  )

  const onGoBackClick = useCallback(() => {
    history.push(`/tags/${tagId}`)
  }, [tagId, history])

  return {
    state: {
      tag,
      dialogDisplayCondition,
    },
    actions: {
      onSetForm,
      onTagFormSubmit,
      onGoBackClick,
      handleHideDialog,
      handleShowDialog,
    },
  }
}
