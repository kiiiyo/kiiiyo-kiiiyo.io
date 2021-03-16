import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { UseCase, Hooks } from '../../features'
import { Domain } from '../../features'

export const useTagCreatePageContainer = () => {
  /**
   * Hooks
   */

  const {
    actions: { handleShowNotice },
  } = Hooks.Notice.useNotice()

  /**
   * Variables
   */

  const history = useHistory()

  const onTagFormSubmit = useCallback(
    (form: Domain.Tag.TagCreateForm) => {
      UseCase.Tag.createTag(form)
        .then(() => {
          handleShowNotice({
            type: 'success',
            message: 'Created tags',
          })
          history.push('/tags')
        })
        .catch(() => {
          handleShowNotice({
            type: 'error',
            message: 'Failed to create tag',
          })
        })
    },
    [history, handleShowNotice]
  )

  /**
   * Actions
   */

  const onGoBackClick = useCallback(() => {
    history.push('/tags')
  }, [history])

  return {
    actions: {
      onGoBackClick,
      onTagFormSubmit,
    },
  }
}
