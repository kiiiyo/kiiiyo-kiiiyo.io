import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
//
import { Domain, Store } from '..'

export type NoticePresenter = {
  state: {
    notice: Domain.Notice.Entity | null
  }
  actions: {
    handleShowNotice: (notice: Domain.Notice.Entity) => void
    handleHideNotice: () => void
  }
}

export const useNotice: () => NoticePresenter = () => {
  const [notice, setNotice] = useRecoilState<Domain.Notice.Entity | null>(
    Store.Notice.noticeState
  )

  const handleShowNotice = useCallback(
    (value: Domain.Notice.Entity) => {
      setNotice(value)
    },
    [setNotice]
  )

  const handleHideNotice = useCallback(() => {
    setNotice(null)
  }, [setNotice])

  return {
    state: {
      notice,
    },
    actions: {
      handleShowNotice,
      handleHideNotice,
    },
  } as NoticePresenter
}
