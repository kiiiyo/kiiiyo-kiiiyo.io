import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Domain, Hooks, UseCase } from '../../features'

type TagDetailUrlParams = {
  tagId: string
}

export const useTagDetailContainer = () => {
  const {
    state: { notice },
    actions: { handleHideNotice, handleShowNotice },
  } = Hooks.Notice.useNotice()
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

  const onDeleteClick = useCallback(() => {
    UseCase.Tag.deleteTag(tagId)
      .then((data) => {
        handleShowNotice({
          type: 'success',
          message: 'Tag delete.',
        })
        history.push('/tags')
      })
      .catch(() => {
        handleShowNotice({
          type: 'error',
          message: 'Failed to delete tag.',
        })
      })
  }, [tagId, history, handleShowNotice])

  const onGoUpdateClick = useCallback(() => {
    history.push(`/tags/${tagId}/edit`)
  }, [tagId, history])

  const onGoBackClick = useCallback(() => {
    history.push(`/tags`)
  }, [history])

  return {
    state: {
      tag,
      notice,
    },
    actions: {
      onGoBackClick,
      onGoUpdateClick,
      onDeleteClick,
      handleHideNotice,
    },
  }
}
