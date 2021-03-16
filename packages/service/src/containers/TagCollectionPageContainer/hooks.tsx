import { useCallback, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useHistory } from 'react-router-dom'
import { UseCase, Hooks, Store } from '../../features'

export const useTagCollectionContainer = () => {
  const {
    state: { notice },
    actions: { handleHideNotice },
  } = Hooks.Notice.useNotice()
  /**
   * Variables
   */
  const setTagCollection = useSetRecoilState(Store.Tag.tagCollectionState)
  const tagCollection = useRecoilValue(Store.Tag.tagCollection)
  const history = useHistory()

  const handleFetchTagCollection = useCallback(() => {
    UseCase.Tag.tagCollection().then((data) => {
      console.log(data)
      setTagCollection(data)
    })
  }, [setTagCollection])

  useEffect(() => {
    handleFetchTagCollection()
  }, [handleFetchTagCollection])

  /**
   * Actions
   */

  const onGoToCreateClick = useCallback(() => {
    history.push('/tags/create')
  }, [history])

  const onGoToDetailClick = useCallback(
    (id: string) => {
      history.push(`/tags/${id}`)
    },
    [history]
  )
  return {
    state: {
      tagCollection,
      notice,
    },
    actions: {
      onGoToCreateClick,
      onGoToDetailClick,
      handleHideNotice,
    },
  }
}
