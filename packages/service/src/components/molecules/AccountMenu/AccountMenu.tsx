import React, { FC, useState } from 'react'
import { Auth } from 'aws-amplify'
//
import { Atoms } from '../../index'

/**
 * Interface
 */

export type State = {
  anchorEl: (EventTarget & HTMLElement) | null
  isOpen: boolean
  //user: any
}

export type Actions = {
  handleCurrent: (event: React.MouseEvent<HTMLElement>) => void
  handleClose: () => void
  handleLogout: () => void
}

export type HeaderBarPresenterProps = {
  state: State
  actions: Actions
}

/**
 * Container
 */

// FIXME: hooks ファイル化してみる
const AccountMenuContainer = () => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLElement) | null>(
    null
  )
  const isOpen = Boolean(anchorEl)

  const handleCurrent = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget
    setAnchorEl(target)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    Auth.signOut()
  }

  return {
    state: { anchorEl, isOpen },
    actions: { handleCurrent, handleClose, handleLogout },
  }
}

/**
 * Presenter
 */

const AccountMenuPresenter: FC<HeaderBarPresenterProps> = (props) => {
  const {
    state: { isOpen, anchorEl },
    actions: { handleCurrent, handleClose, handleLogout },
  } = props

  return (
    <>
      <Atoms.IconButton onClick={handleCurrent}>
        <Atoms.AccountCircle />
      </Atoms.IconButton>
      <Atoms.Popover
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handleClose}
      >
        <Atoms.List component="nav">
          {/*
          <Atoms.ListItem>
            <Atoms.ListItemText primary={user.name} />
          </Atoms.ListItem>
          */}
        </Atoms.List>
        <Atoms.Divider />
        <Atoms.ListItem button onClick={handleLogout}>
          <Atoms.ListItemIcon>
            <Atoms.ExitToAppIcon />
          </Atoms.ListItemIcon>
          <Atoms.ListItemText primary="ログアウト" />
        </Atoms.ListItem>
      </Atoms.Popover>
    </>
  )
}

const AccountMenu: FC = () => {
  const { actions, state } = AccountMenuContainer()
  return <AccountMenuPresenter state={state} actions={actions} />
}

export default AccountMenu
