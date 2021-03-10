import { Domain } from '..'
import { Repository } from '../index'

export const tagCollection: () => Promise<Domain.Tag.TagCollection> = async () => {
  return await Repository.Tag.tagList()
}
