import React, { FC } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles'
//
import { Atoms } from '../..'

/**
 * Interface
 */

export type State = {
  label: string
  description?: string
}

//type Actions = {}

export interface FormFieldProps {
  state: State
}

/**
 * Style
 */

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      head: {
        [theme.breakpoints.up('sm')]: {
          width: '200px',
          paddingTop: theme.spacing(2),
        },
      },
      icon: {
        position: 'absolute',
        top: '-0.85em',
      },
      body: {
        [theme.breakpoints.up('sm')]: {
          width: 'calc(100% - 200px)',
        },
      },
    }),
  { index: 1 }
)

/**
 * Presenter
 */

export const FormField: FC<FormFieldProps> = (props) => {
  const {
    children,
    state: { label, description },
  } = props
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const classes = useStyles()
  // FIXME
  const displayType = matches ? 'flex' : 'block'

  return (
    <Atoms.Box display={displayType} flexDirection="row" justifyContent="start">
      <Atoms.Box className={classes.head} pb={1}>
        <Atoms.Typography component="label">{label}</Atoms.Typography>
        {description && (
          <Atoms.Box
            component="span"
            position="relative"
            display="inline-block"
          >
            <Atoms.Tooltip title={description} arrow placement="top">
              <Atoms.HelpIcon className={classes.icon} fontSize="small" />
            </Atoms.Tooltip>
          </Atoms.Box>
        )}
      </Atoms.Box>
      <Atoms.Box className={classes.body}>{children}</Atoms.Box>
    </Atoms.Box>
  )
}

/**
 * Merge
 */

export default FormField
