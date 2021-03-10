import { useCallback, useEffect } from 'react'
import { UseCase } from '../../features'

export const useTagCollectionContainer = () => {
  const fetchTagCollection = useCallback(() => {
    UseCase.Tag.tagList().then((tag) => {
      console.log(tag)
    })
  }, [])

  useEffect(() => {
    fetchTagCollection()
  }, [fetchTagCollection])

  return {
    state: {},
  }
}
