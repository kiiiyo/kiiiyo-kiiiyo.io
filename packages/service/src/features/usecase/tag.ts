import { Domain } from '..'
import { Repository } from '../index'

export const tagCollection: () => Promise<Domain.Tag.TagCollection> = async () => {
  return await Repository.Tag.tagList()
}

export const tagDetail: (id: string) => Promise<Domain.Tag.TagDetail> = async (
  id: string
) => {
  return await Repository.Tag.tagDetail(id)
}

export const createTag: (
  form: Domain.Tag.TagCreateForm
) => Promise<any> = async (form: Domain.Tag.TagCreateForm) => {
  return await Repository.Tag.createTag(form)
}

export const deleteTag: (
  id: string
) => Promise<Domain.Tag.TagDeleteResult> = async (id: string) => {
  return await Repository.Tag.deleteTag(id)
}

export const updateTag: (
  form: Domain.Tag.TagUpdateForm
) => Promise<Domain.Tag.TagUpdateResult> = async (
  form: Domain.Tag.TagUpdateForm
) => {
  return await Repository.Tag.updateTag(form)
}
