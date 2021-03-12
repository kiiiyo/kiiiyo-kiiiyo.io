import React, { FC } from 'react'
//import { UseFormMethods } from 'react-hook-form'
//
import { Atoms, Molecules } from '../../'

/**
 * Interface
 */

export type State = {}

export type Actions = {}

export interface TagFormProps {}

/**
 * Presenter
 */

export const TagForm: FC<TagFormProps> = (props) => {
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
                  label: 'メールアドレス',
                  description:
                    '招待するユーザーのメールアドレスを入力してください',
                }}
              >
                <Atoms.TextField
                  id="email"
                  name="email"
                  variant="outlined"
                  placeholder="メールアドレスを入力してください"
                  fullWidth
                />
              </Molecules.FormField>
            </Atoms.Box>
          </Atoms.Box>
        </Atoms.CardContent>
        <Atoms.Divider />
        <Atoms.CardActions>
          <Atoms.Box p={2} ml="auto">
            <Atoms.Button variant="contained" color="primary">
              招待
            </Atoms.Button>
          </Atoms.Box>
        </Atoms.CardActions>
      </Atoms.Card>
    </Atoms.Paper>
  )
}

export default TagForm
