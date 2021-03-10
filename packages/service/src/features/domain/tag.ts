import { Tag, ListTagsQuery } from '../../API'
import { DeepOmit } from '../../libs/deep-omit'
//
export { TagStatusEnum } from '../../API'

export type Entity = DeepOmit<Exclude<Tag, null>, '__typename'>

export type TagCollection = DeepOmit<Exclude<ListTagsQuery, null>, '__typename'>

export type TagCollectionState = TagCollection
