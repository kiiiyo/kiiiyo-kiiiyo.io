import { FC } from 'react'
//
import { useTagCollectionContainer } from './hooks'
import { Pages } from '../../components'

export const TagCollectionPageContainer: FC = (props) => {
  useTagCollectionContainer()
  return <Pages.TagCollectionPage />
}

export default TagCollectionPageContainer
