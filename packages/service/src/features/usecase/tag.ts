import { Repository } from '../index'

export const tagList: () => Promise<any> = async () => {
  return await Repository.Tag.tagList()
}
