import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
//import { UseCase, Store } from '../../features'
import { useTagCreateForm } from '../../components/organisms/TagCreateForm/hooks'
import { Domain } from '../../features'

export const useTagCreatePageContainer = () => {
  /**
   * Hooks
   */

  const {
    state: { formState, formErrors },
    actions: { handleSubmit, handleRegister, handleWatch },
  } = useTagCreateForm()

  /**
   * Variables
   */

  const history = useHistory()

  const onTagCreateFormSubmit = useCallback(
    (form: Domain.Tag.TagCreateForm) => {
      const id = uuid()
      const tagStatus = { ...form, id }

      console.log(tagStatus)
    },
    []
  )

  /**
   * Actions
   */

  const onGoBackClick = useCallback(() => {
    history.push('/tags')
  }, [history])

  return {
    state: { formState, formErrors },
    actions: {
      onGoBackClick,
      onTagCreateFormSubmit,
      handleSubmit,
      handleRegister,
      handleWatch,
    },
  }
}
