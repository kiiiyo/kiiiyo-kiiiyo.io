import { FC } from 'react'
//
import { useTagCreatePageContainer } from './hooks'
import { Pages } from '../../components'

export const TagCreatePageContainer: FC = (props) => {
  const { state, actions } = useTagCreatePageContainer()
  return <Pages.TagCreatePage state={state} actions={actions} />
}

export default TagCreatePageContainer
