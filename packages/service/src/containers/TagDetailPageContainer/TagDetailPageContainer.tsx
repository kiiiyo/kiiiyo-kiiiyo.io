import { FC } from 'react'
//
import { useTagDetailContainer } from './hooks'
import { Pages } from '../../components'

export const TagDetailPageContainer: FC = (props) => {
  const { actions } = useTagDetailContainer()
  return <Pages.TagDetailPage actions={actions} />
}

export default TagDetailPageContainer
