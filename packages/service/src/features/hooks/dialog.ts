import { useCallback, useState } from 'react'
//
export type DialogPresenter = {
  state: {
    dialogDisplayCondition: boolean
  }
  actions: {
    handleShowDialog: () => void
    handleHideDialog: () => void
  }
}

export const useDialog: () => DialogPresenter = () => {
  const [dialogDisplayCondition, setDialogDisplayCondition] = useState<boolean>(
    false
  )

  const handleShowDialog = useCallback(() => {
    setDialogDisplayCondition(true)
  }, [setDialogDisplayCondition])

  const handleHideDialog = useCallback(() => {
    setDialogDisplayCondition(false)
  }, [setDialogDisplayCondition])

  return {
    state: {
      dialogDisplayCondition,
    },
    actions: {
      handleShowDialog,
      handleHideDialog,
    },
  } as DialogPresenter
}
