import React, { FC } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

/**
 * Interface
 */

export type State = {
  name: string
}

export type Actions = {
  ref: any
}

export type SelectPresenterProps = {
  state: State
  actions: Actions
}

export type SelectProps = {
  state: State
  actions: Actions
}

/**
 * Styles
 */

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      select: {
        padding: theme.spacing(2),
        borderRadius: 4,
        borderColor: theme.palette.grey[400],
        '-webkit-appearance': 'none',
        appearance: 'none',
      },
    }),
  { index: 1 }
)

export const SelectPresenter: FC<SelectPresenterProps> = (props) => {
  const {
    state: { name },
    actions: { ref },
    children,
  } = props

  const classes = useStyles()

  return (
    <select className={classes.select} name={name} ref={ref}>
      {children}
    </select>
  )
}

export const Select: FC<SelectProps> = (props) => {
  return <SelectPresenter {...props} />
}

export default Select
