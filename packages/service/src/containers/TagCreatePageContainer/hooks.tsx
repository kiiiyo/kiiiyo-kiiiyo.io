import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
//import { UseCase, Store } from '../../features'

export const useTagCreatePageContainer = () => {
  /**
   * Variables
   */

  const history = useHistory()

  /**
   * Actions
   */

  const onGoBackClick = useCallback(() => {
    history.push('/tags')
  }, [history])

  return {
    actions: {
      onGoBackClick,
    },
  }
}
