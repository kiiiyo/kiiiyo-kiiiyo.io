import React, { FC } from 'react'
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
//
import { Atoms } from '../../index'
//

/**
 * Interface
 */

export type Actions = {}

export interface TagCollectionProps {}

export interface TagCollectionPresenterProps {}

/**
 * Style
 */

//const useStyles = makeStyles((theme: Theme) => createStyles({}), { index: 1 })

/**
 * Presenter
 */

export const TagCollectionPresenter: FC<TagCollectionPresenterProps> = () => {
  //const classes = useStyles()

  return (
    <Atoms.Paper elevation={2}>
      <Atoms.Card>
        <Atoms.CardHeader title="タグ一覧" />
        <Atoms.Divider />
        <Atoms.CardContent>
          <Atoms.TableContainer>
            <Atoms.Table>
              <Atoms.TableHead>
                <Atoms.TableRow>
                  <Atoms.TableCell>Name</Atoms.TableCell>
                  <Atoms.TableCell align="right">Slug</Atoms.TableCell>
                  <Atoms.TableCell align="right">SortOrder</Atoms.TableCell>
                  <Atoms.TableCell align="right">Status</Atoms.TableCell>
                </Atoms.TableRow>
              </Atoms.TableHead>
              <Atoms.TableBody>
                <Atoms.TableRow>
                  <Atoms.TableCell>Name</Atoms.TableCell>
                  <Atoms.TableCell align="right">Slug</Atoms.TableCell>
                  <Atoms.TableCell align="right">SortOrder</Atoms.TableCell>
                  <Atoms.TableCell align="right">Status</Atoms.TableCell>
                </Atoms.TableRow>
              </Atoms.TableBody>
            </Atoms.Table>
          </Atoms.TableContainer>
        </Atoms.CardContent>
      </Atoms.Card>
    </Atoms.Paper>
  )
}

/**
 * Merge
 */

export const TagCollection: FC<TagCollectionProps> = (props) => {
  return <TagCollectionPresenter />
}

export default TagCollection
