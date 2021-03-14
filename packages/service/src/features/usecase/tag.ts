import { Domain } from '..'
import { Repository } from '../index'

export const tagCollection: () => Promise<Domain.Tag.TagCollection> = async () => {
  return await Repository.Tag.tagList()
}

export const createTag: (
  form: Domain.Tag.TagCreateForm
) => Promise<any> = async (form: Domain.Tag.TagCreateForm) => {
  return await Repository.Tag.createTag(form)
}
