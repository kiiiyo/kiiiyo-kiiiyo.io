import { FC } from 'react'
//
import { useTagUpdatePageContainer } from './hooks'
import { Pages } from '../../components'

export const TagUpdatePageContainer: FC = () => {
  const { actions } = useTagUpdatePageContainer()
  return <Pages.TagUpdatePage state={{}} actions={actions} />
}

export default TagUpdatePageContainer
