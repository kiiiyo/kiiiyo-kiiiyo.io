import { FC } from 'react'
//

import { Atoms } from '../../index'
//

/**
 * Interface
 */

export type State = {
  displayCondition: boolean
  title?: string
  description?: string
  disagreeButtonText: string
  agreeButtonText: string
}

export type Actions = {
  handleClose: () => void
  handleAgree?: () => void
  handleDisagree?: () => void
}

export interface ConfirmDialogProps {
  state: State
  actions: Actions
}

/**
 * Presenter
 */

export const ConfirmDialog: FC<ConfirmDialogProps> = (props) => {
  const {
    state: {
      title,
      description,
      displayCondition,
      disagreeButtonText,
      agreeButtonText,
    },
    actions: { handleAgree, handleDisagree, handleClose },
  } = props
  return (
    <Atoms.Dialog
      open={displayCondition}
      onBackdropClick={handleClose}
      onClose={handleClose}
    >
      {title && <Atoms.DialogTitle>{title}</Atoms.DialogTitle>}
      <Atoms.Divider />
      <Atoms.DialogContent>
        <Atoms.Box pt={3} pb={3}>
          {description && (
            <Atoms.DialogContentText>{description}</Atoms.DialogContentText>
          )}
        </Atoms.Box>
      </Atoms.DialogContent>
      <Atoms.Divider />
      <Atoms.DialogActions>
        {handleDisagree && (
          <Atoms.Button
            onClick={handleDisagree}
            color="secondary"
            variant="outlined"
          >
            {disagreeButtonText}
          </Atoms.Button>
        )}
        {handleAgree && (
          <Atoms.Button
            onClick={handleAgree}
            color="primary"
            variant="outlined"
          >
            {agreeButtonText}
          </Atoms.Button>
        )}
      </Atoms.DialogActions>
    </Atoms.Dialog>
  )
}

export default ConfirmDialog
