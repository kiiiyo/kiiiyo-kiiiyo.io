import { Domain } from '../index'
import { atom, selector } from 'recoil'

export const tagCollectionState = atom<Domain.Tag.TagCollectionState | null>({
  key: 'store/tagCollectionState',
  default: null,
})

export const tagCollection = selector<Domain.Tag.TagCollection | null>({
  key: 'selector/tags',
  get: ({ get }) => {
    return get(tagCollectionState) ?? null
  },
})
