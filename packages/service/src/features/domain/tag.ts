import {
  Tag,
  GetTagQuery,
  ListTagsQuery,
  CreateTagInput,
  UpdateTagInput,
  CreateTagMutation,
  DeleteTagMutation,
} from '../../API'
import { DeepOmit } from '../../libs/deep-omit'
//
export { TagStatusEnum } from '../../API'

export type Entity = DeepOmit<Exclude<Tag, null>, '__typename'>

export type TagCollection = DeepOmit<Exclude<ListTagsQuery, null>, '__typename'>

export type TagCollectionState = TagCollection

export type TagCreateForm = CreateTagInput

export type TagCreateResult = CreateTagMutation

export type TagDeleteResult = DeleteTagMutation

export type TagUpdateForm = UpdateTagInput

export type TagDetail = DeepOmit<Exclude<GetTagQuery, null>, '__typename'>
