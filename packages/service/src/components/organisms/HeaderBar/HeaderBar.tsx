import React, { FC } from 'react'
import { Hidden } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
//
import { Hooks } from '../../../features'
import { Atoms, Molecules } from '../../index'
//

/**
 * Interface
 */

export type Actions = {
  handleDrawerDisplay: (condition: boolean) => void
}

export type HeaderBarPresenterProps = {
  actions: Actions
}

/**
 * Style
 */

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      appBar: {
        color: '#000',
        backgroundColor: theme.palette.background.paper,
      },
      toolbar: {
        minHeight: 64,
      },
      menuButton: {
        marginRight: theme.spacing(1),
      },
    }),
  { index: 1 }
)

/**
 * Presenter
 */

export const HeaderBarPresenter: FC<HeaderBarPresenterProps> = (props) => {
  const classes = useStyles()
  const {
    actions: { handleDrawerDisplay },
  } = props

  return (
    <Atoms.AppBar className={classes.appBar}>
      <Atoms.Toolbar className={classes.toolbar}>
        <Hidden lgUp={true}>
          <Atoms.IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              handleDrawerDisplay(true)
            }}
          >
            <Atoms.MenuIcon />
          </Atoms.IconButton>
        </Hidden>
        <Atoms.Typography component="h1" variant="h6" color="inherit" noWrap>
          Management Console
        </Atoms.Typography>
        <Atoms.Box marginLeft="auto">
          <Molecules.AccountMenu />
        </Atoms.Box>
      </Atoms.Toolbar>
    </Atoms.AppBar>
  )
}

/**
 * Merge
 */

export const HeaderBar: FC = () => {
  // FIXME: ContainerComponentを定義するか検討
  const {
    actions: { handleDrawerDisplay },
  } = Hooks.Navigation.useNavigation()
  return <HeaderBarPresenter actions={{ handleDrawerDisplay }} />
}

export default HeaderBar
