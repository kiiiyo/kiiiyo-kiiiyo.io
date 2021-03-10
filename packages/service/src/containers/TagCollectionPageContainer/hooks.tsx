import { useCallback, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { UseCase, Store } from '../../features'

export const useTagCollectionContainer = () => {
  const setTagCollection = useSetRecoilState(Store.Tag.tagCollectionState)
  const tagCollection = useRecoilValue(Store.Tag.tagCollection)

  const handleFetchTagCollection = useCallback(() => {
    UseCase.Tag.tagCollection().then((data) => {
      console.log(data)
      setTagCollection(data)
    })
  }, [setTagCollection])

  useEffect(() => {
    handleFetchTagCollection()
  }, [handleFetchTagCollection])

  return {
    state: {
      tagCollection,
    },
  }
}
