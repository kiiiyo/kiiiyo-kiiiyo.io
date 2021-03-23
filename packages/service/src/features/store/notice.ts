import { Domain } from '../index'
import { atom } from 'recoil'

export const noticeState = atom<Domain.Notice.Entity | null>({
  key: 'store/notice',
  default: null,
})
