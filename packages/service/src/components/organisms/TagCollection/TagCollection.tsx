import React, { FC } from 'react'
//import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
//
import { Domain } from '../../../features'
import { Atoms } from '../../'
//

/**
 * Interface
 */

export type State = {
  tagCollection: Domain.Tag.TagCollection | null
}

export type Actions = {
  onGoToDetailClick: (id: string) => void
}

export interface TagCollectionProps {
  state: State
  actions: Actions
}

/**
 * Style
 */

//const useStyles = makeStyles((theme: Theme) => createStyles({}), { index: 1 })

/**
 * Presenter
 */

export const TagCollection: FC<TagCollectionProps> = (props) => {
  //const classes = useStyles()
  const {
    state: { tagCollection },
    actions: { onGoToDetailClick },
  } = props
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
                {tagCollection &&
                  tagCollection.listTags?.items?.map((tag, index) => {
                    return (
                      <Atoms.TableRow key={index}>
                        <Atoms.TableCell>
                          <Atoms.Link
                            onClick={() => {
                              onGoToDetailClick(tag?.id ?? '')
                            }}
                          >
                            {tag?.name}
                          </Atoms.Link>
                        </Atoms.TableCell>
                        <Atoms.TableCell align="right">
                          {tag?.slug}
                        </Atoms.TableCell>
                        <Atoms.TableCell align="right">
                          {tag?.sortOrder}
                        </Atoms.TableCell>
                        <Atoms.TableCell align="right">
                          {tag?.status}
                        </Atoms.TableCell>
                      </Atoms.TableRow>
                    )
                  })}
              </Atoms.TableBody>
            </Atoms.Table>
          </Atoms.TableContainer>
        </Atoms.CardContent>
      </Atoms.Card>
    </Atoms.Paper>
  )
}

export default TagCollection
