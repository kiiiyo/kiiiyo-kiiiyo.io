import React, { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Hidden } from '@material-ui/core'
//
import { Atoms } from '../..'
import {
  useSidebar,
  State as UseSidebarState,
  Actions as UseSidebarActions,
} from './hooks'

/**
 * Interface
 */

export type CurrentMenuType = 'HOME' | 'ARTICLE' | 'CATEGORY' | 'TAG'

export type MenuItemType = {
  name: string
  label: string
  path: string
  icon: ReactNode
}

export type State = {
  menuList: MenuItemType[]
  currentMenu: CurrentMenuType
} & UseSidebarState

export type Actions = UseSidebarActions

export type SidebarPresenterProps = {
  state: State
  actions: Actions
}

export type SidebarProps = {
  state: { currentMenu: CurrentMenuType }
}

/**
 * Styles
 */

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      inner: {
        top: 64,
        width: 256,
        height: `calc(100% - 64px)`,
        [theme.breakpoints.down('md')]: {
          top: 0,
          height: '100%',
        },
      },
    }),
  { index: 1 }
)

/**
 * Presenter
 */

export const SidebarPresenter: FC<SidebarPresenterProps> = (props) => {
  const classes = useStyles()
  const {
    state: { isDrawerDisplay, menuList, currentMenu },
    actions: { handleDrawerDisplay },
  } = props

  return (
    <Hidden mdDown={!isDrawerDisplay}>
      <Atoms.Drawer
        open={true}
        onClose={() => {
          handleDrawerDisplay(false)
        }}
        variant={isDrawerDisplay ? 'temporary' : 'permanent'}
        classes={{
          paper: classes.inner,
        }}
      >
        <Atoms.List>
          {menuList.map((menuItemtem: MenuItemType, index: number) => {
            const isCurrent = menuItemtem.name === currentMenu
            return (
              <li key={index}>
                <Atoms.ListItem
                  button
                  component={NavLink}
                  to={menuItemtem.path}
                  selected={isCurrent}
                >
                  <Atoms.ListItemIcon>{menuItemtem.icon}</Atoms.ListItemIcon>
                  <Atoms.ListItemText primary={menuItemtem.label} />
                </Atoms.ListItem>
              </li>
            )
          })}
        </Atoms.List>
      </Atoms.Drawer>
    </Hidden>
  )
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const {
    state: { currentMenu },
  } = props

  const {
    state: { isDrawerDisplay },
    actions: { handleDrawerDisplay },
  } = useSidebar()

  const menuList = [
    {
      name: 'HOME',
      label: 'ホーム',
      path: `/`,
      icon: <Atoms.HomeIcon />,
    },
    {
      name: 'ARTICLE',
      label: '記事',
      path: `/articles`,
      icon: <Atoms.DescriptionIcon />,
    },
    {
      name: 'CATEGORY',
      label: 'カテゴリ',
      path: `/categories`,
      icon: <Atoms.FolderIcon />,
    },
    {
      name: 'Tag',
      label: 'タグ',
      path: `/tags`,
      icon: <Atoms.LocalOfferIcon />,
    },
  ]

  return (
    <SidebarPresenter
      state={{
        isDrawerDisplay,
        menuList,
        currentMenu,
      }}
      actions={{ handleDrawerDisplay }}
    />
  )
}

export default Sidebar
