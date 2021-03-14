import { FC } from 'react'
//
import { useTagDetailContainer } from './hooks'
import { Pages } from '../../components'

export const TagDetailPageContainer: FC = () => {
  const { state, actions } = useTagDetailContainer()
  return <Pages.TagDetailPage state={state} actions={actions} />
}

export default TagDetailPageContainer
