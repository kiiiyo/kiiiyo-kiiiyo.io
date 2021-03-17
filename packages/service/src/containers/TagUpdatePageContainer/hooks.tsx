import { useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
//
// import { Domain } from '../../features'
// import { UseCase, Hooks } from '../../features'

type TagUpdateUrlParams = {
  tagId: string
}

export const useTagUpdatePageContainer = () => {
  /**
   * Hooks
   */

  // const {
  //   actions: { handleShowNotice },
  // } = Hooks.Notice.useNotice()

  /**
   * Variables
   */

  const history = useHistory()
  const { tagId } = useParams<TagUpdateUrlParams>()

  /**
   * Actions
   */

  const onGoBackClick = useCallback(() => {
    history.push(`/tags/${tagId}`)
  }, [tagId, history])

  return {
    actions: {
      onGoBackClick,
    },
  }
}
