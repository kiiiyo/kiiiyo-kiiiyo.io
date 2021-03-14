import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { UseCase } from '../../features'
import { Domain } from '../../features'

export const useTagCreatePageContainer = () => {
  /**
   * Hooks
   */

  /**
   * Variables
   */

  const history = useHistory()

  const onTagFormSubmit = useCallback(
    (form: Domain.Tag.TagCreateForm) => {
      UseCase.Tag.createTag(form).then((data) => {
        history.push('/tags')
      })
    },
    [history]
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
