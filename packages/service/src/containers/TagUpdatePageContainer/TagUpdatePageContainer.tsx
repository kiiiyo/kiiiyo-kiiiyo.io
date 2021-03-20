import { FC } from 'react'
//
import { useTagUpdatePageContainer } from './hooks'
import { Pages } from '../../components'

export const TagUpdatePageContainer: FC = () => {
  const { state, actions } = useTagUpdatePageContainer()
  return <Pages.TagUpdatePage state={state} actions={actions} />
}

export default TagUpdatePageContainer
