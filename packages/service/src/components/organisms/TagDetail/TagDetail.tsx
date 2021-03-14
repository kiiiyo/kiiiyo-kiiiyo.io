import React, { FC } from 'react'
//
import { Domain } from '../../../features'
import { Atoms, Molecules } from '../..'

/**
 * Interface
 */

export type State = {
  tag: Domain.Tag.TagDetail
}

export interface TagDetailProps {
  state: State
}

/**
 * Presenter
 */

export const TagDetail: FC<TagDetailProps> = (props) => {
  const {
    state: {
      tag: { getTag },
    },
  } = props
  console.log(getTag)
  return (
    <Atoms.Paper elevation={2}>
      <Atoms.Card>
        <Atoms.CardHeader title="Tag data" />
        <Atoms.Divider />
        <Atoms.CardContent>
          <Atoms.Box p={1}>
            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'ID',
                }}
              >
                <Atoms.Box pt={2} pb={1}>
                  <Atoms.Typography variant="body1" component="p">
                    {getTag?.id}
                  </Atoms.Typography>
                </Atoms.Box>
              </Molecules.FormField>
            </Atoms.Box>
            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Name',
                }}
              >
                <Atoms.Box pt={2} pb={1}>
                  <Atoms.Typography variant="body1" component="p">
                    {getTag?.name}
                  </Atoms.Typography>
                </Atoms.Box>
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Slug',
                }}
              >
                <Atoms.Box pt={2} pb={1}>
                  <Atoms.Typography variant="body1" component="p">
                    {getTag?.slug}
                  </Atoms.Typography>
                </Atoms.Box>
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Description',
                }}
              >
                <Atoms.Box pt={2} pb={1}>
                  <Atoms.Typography variant="body1" component="p">
                    {getTag?.description || '-'}
                  </Atoms.Typography>
                </Atoms.Box>
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Sort Order',
                }}
              >
                <Atoms.Box pt={2} pb={1}>
                  <Atoms.Typography variant="body1" component="p">
                    {getTag?.sortOrder}
                  </Atoms.Typography>
                </Atoms.Box>
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={2}>
              <Molecules.FormField
                state={{
                  label: 'Status',
                }}
              >
                <Atoms.Box pt={2} pb={1}>
                  <Atoms.Typography variant="body1" component="p">
                    {getTag?.status}
                  </Atoms.Typography>
                </Atoms.Box>
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={2}>
              <Molecules.FormField
                state={{
                  label: 'Created At',
                }}
              >
                <Atoms.Box pt={2} pb={1}>
                  <Atoms.Typography variant="body1" component="p">
                    {getTag?.createdAt}
                  </Atoms.Typography>
                </Atoms.Box>
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={2}>
              <Molecules.FormField
                state={{
                  label: 'Updated At',
                }}
              >
                <Atoms.Box pt={2} pb={1}>
                  <Atoms.Typography variant="body1" component="p">
                    {getTag?.updatedAt}
                  </Atoms.Typography>
                </Atoms.Box>
              </Molecules.FormField>
            </Atoms.Box>
          </Atoms.Box>
        </Atoms.CardContent>
      </Atoms.Card>
    </Atoms.Paper>
  )
}

export default TagDetail
