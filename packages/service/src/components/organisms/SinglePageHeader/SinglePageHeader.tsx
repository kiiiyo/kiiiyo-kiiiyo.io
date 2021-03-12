import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
//
import { Atoms } from '../..'

/**
 * Interface
 */

export type State = {
  pageTitle: string
  actionBar?: React.ReactNode
}

export type Actions = {
  onGoBackClick?: () => void
}

export type SinglePageHeaderPresenterProps = {
  state: State
  actions: Actions
}

export type SinglePageHeaderProps = {
  state: State
  actions: Actions
}

/**
 * Style
 */

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      divider: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
      },
    }),
  { index: 1 }
)

/**
 * Presenter
 */

export const SinglePageHeaderPresenter: FC<SinglePageHeaderPresenterProps> = (
  props
) => {
  const {
    state: { pageTitle, actionBar },
    actions: { onGoBackClick },
  } = props
  const classes = useStyles()

  return (
    <Atoms.Box
      p={3}
      display="flex"
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
    >
      <Atoms.IconButton onClick={onGoBackClick}>
        <Atoms.ArrowBackIcon />
      </Atoms.IconButton>
      <Atoms.Divider
        orientation="vertical"
        flexItem
        className={classes.divider}
      />
      <Atoms.Typography variant="h5" component="h1">
        {pageTitle}
      </Atoms.Typography>
      {/* Page Action Bar - Start */}
      {actionBar && (
        <Atoms.Box
          display="flex"
          flexDirection="row"
          justifyContent="end"
          alignItems="center"
          marginLeft={'auto'}
        >
          {actionBar}
        </Atoms.Box>
      )}
      {/* Page Action Bar - End */}
    </Atoms.Box>
  )
}

/**
 * Merge
 */

export const SinglePageHeader: FC<SinglePageHeaderProps> = (props) => {
  const { state, actions } = props
  return <SinglePageHeaderPresenter state={state} actions={actions} />
}

export default SinglePageHeader
