import React, { VFC } from 'react'
//
import { Domain } from '../../../features'
import { Atoms } from '../../../components'

/**
 * Interface
 */

export type State = {
  open: boolean
  type: Domain.Notice.Type
  autoHideDuration?: number
  message: string
}

export type Actions = {
  handleClose: () => void
}

export interface ToastProps {
  state: State
  actions: Actions
}

/**
 * Styles
 */

export const Toast: VFC<ToastProps> = (props) => {
  const {
    state: { open, type, message, autoHideDuration },
    actions: { handleClose },
  } = props

  return (
    <Atoms.Snackbar
      open={open}
      autoHideDuration={autoHideDuration || 6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      onExited={handleClose}
    >
      <Atoms.MuiAlert onClose={handleClose} severity={type}>
        {message}
      </Atoms.MuiAlert>
    </Atoms.Snackbar>
  )
}

export default Toast
