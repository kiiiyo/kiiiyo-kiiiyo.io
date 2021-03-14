import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
//import { UseCase, Store } from '../../features'

type TagDetailUrlParams = {
  tagId: string
}

export const useTagDetailContainer = () => {
  /**
   * Variables
   */
  const { tagId } = useParams<TagDetailUrlParams>()
  const history = useHistory()

  // const handleFetchTagCollection = useCallback(() => {
  //   UseCase.Tag.tagCollection().then((data) => {
  //     console.log(data)
  //     setTagCollection(data)
  //   })
  // }, [setTagCollection])

  // useEffect(() => {
  //   handleFetchTagCollection()
  // }, [handleFetchTagCollection])

  /**
   * Actions
   */

  const onGoBackClick = useCallback(() => {
    history.push(`/tags`)
  }, [history])
  return {
    actions: {
      onGoBackClick,
    },
  }
}
