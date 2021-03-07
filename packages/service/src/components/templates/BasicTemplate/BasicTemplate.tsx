import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

export interface BasicTemplateProps {
  headerBar: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
}

/**
 * Style
 */

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      headerBar: {
        position: 'fixed',
        zIndex: theme.zIndex.drawer + 1,
      },
      content: {
        overflow: 'hidden',
        paddingTop: theme.spacing(8),
        [theme.breakpoints.up('lg')]: {
          paddingLeft: 256,
        },
      },
    }),
  { index: 1 }
)

const BasicTemplate: FC<BasicTemplateProps> = (props) => {
  const { children, headerBar, sidebar } = props
  const classes = useStyles()

  return (
    <>
      {headerBar && <div className={classes.headerBar}>{headerBar}</div>}
      {sidebar && sidebar}
      {children && (
        <main className={classes.content}>
          <div>{children}</div>
        </main>
      )}
    </>
  )
}

export default BasicTemplate
