import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Domain, UseCase } from '../../features'

type TagDetailUrlParams = {
  tagId: string
}

export const useTagDetailContainer = () => {
  /**
   * Variables
   */
  const [tag, setTag] = useState<Domain.Tag.TagDetail | null>(null)
  const { tagId } = useParams<TagDetailUrlParams>()
  const history = useHistory()

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

  const onGoBackClick = useCallback(() => {
    history.push(`/tags`)
  }, [history])
  return {
    state: {
      tag,
    },
    actions: {
      onGoBackClick,
    },
  }
}
