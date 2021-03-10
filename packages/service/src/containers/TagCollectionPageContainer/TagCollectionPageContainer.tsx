import { FC } from 'react'
//
import { useTagCollectionContainer } from './hooks'
import { Pages } from '../../components'

export const TagCollectionPageContainer: FC = (props) => {
  const {
    state: { tagCollection },
  } = useTagCollectionContainer()
  return <Pages.TagCollectionPage state={{ tagCollection }} />
}

export default TagCollectionPageContainer
