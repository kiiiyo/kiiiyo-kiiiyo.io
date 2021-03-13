import { FC } from 'react'
//
import { useTagCreatePageContainer } from './hooks'
import { Pages } from '../../components'

export const TagCreatePageContainer: FC = (props) => {
  const { actions } = useTagCreatePageContainer()
  return <Pages.TagCreatePage actions={actions} />
}

export default TagCreatePageContainer
