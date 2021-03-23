import { FC } from 'react'
//
import { useTagCollectionContainer } from './hooks'
import { Pages } from '../../components'

export const TagCollectionPageContainer: FC = (props) => {
  const { state, actions } = useTagCollectionContainer()
  return <Pages.TagCollectionPage state={state} actions={actions} />
}

export default TagCollectionPageContainer
