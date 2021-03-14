import React, { FC } from 'react'
//
import { Domain } from '../../../features'
import { Atoms, Molecules } from '../..'

/**
 * Interface
 */

export type State = {}

export interface TagDetailProps {
  state: State
}

/**
 * Presenter
 */

export const TagDetail: FC<TagDetailProps> = (props) => {
  return (
    <Atoms.Paper elevation={2}>
      <Atoms.Card>
        <Atoms.CardHeader title="タグ作成フォーム" />
        <Atoms.Divider />
        <Atoms.CardContent>
          <Atoms.Box p={1}>
            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'ID',
                }}
              >
                テキスト
              </Molecules.FormField>
            </Atoms.Box>
            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Name',
                }}
              >
                テキスト
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Slug',
                }}
              >
                テキスト
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Description',
                }}
              >
                テキスト
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={3}>
              <Molecules.FormField
                state={{
                  label: 'Sort Order',
                }}
              >
                テキスト
              </Molecules.FormField>
            </Atoms.Box>

            <Atoms.Box mb={2}>
              <Molecules.FormField
                state={{
                  label: 'Status',
                }}
              >
                テキスト
              </Molecules.FormField>
            </Atoms.Box>
          </Atoms.Box>
        </Atoms.CardContent>
      </Atoms.Card>
    </Atoms.Paper>
  )
}

export default TagDetail
