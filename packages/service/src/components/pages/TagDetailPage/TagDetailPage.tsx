import { FC } from 'react'
//
import { Domain } from '../../../features'
import { Templates, Organisms, Molecules, Atoms } from '../../../components'

/**
 * Interface
 */

export type State = {
  tag: Domain.Tag.TagDetail | null
  notice: Domain.Notice.Entity | null
}

export type Actions = {
  onGoBackClick: () => void
  onDeleteClick: () => void
  handleHideNotice: () => void
}

export interface TagDetailPageProps {
  state: State
  actions: Actions
}

/**
 * Presenter
 */

export const TagDetailPage: FC<TagDetailPageProps> = (props) => {
  const {
    state: { tag, notice },
    actions: { onGoBackClick, onDeleteClick, handleHideNotice },
  } = props
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'TAG' }} />}
    >
      <Organisms.SinglePageHeader
        state={{
          pageTitle: 'Tag detail',
          actionBar: (
            <>
              <Atoms.Box mr={2}>
                <Atoms.Button
                  variant="outlined"
                  startIcon={<Atoms.AddIcon />}
                  onClick={() => {
                    onDeleteClick()
                  }}
                >
                  削除
                </Atoms.Button>
              </Atoms.Box>
              <Atoms.Box>
                <Atoms.Button variant="outlined" startIcon={<Atoms.AddIcon />}>
                  編集
                </Atoms.Button>
              </Atoms.Box>
            </>
          ),
        }}
        actions={{ onGoBackClick }}
      />
      <Atoms.Divider />
      <Atoms.Container maxWidth="lg">
        {notice && (
          <Molecules.Toast
            state={{ open: true, type: notice.type, message: notice.message }}
            actions={{ handleClose: handleHideNotice }}
          />
        )}

        <Atoms.Box py={4}>
          {tag && <Organisms.TagDetail state={{ tag }} />}
        </Atoms.Box>
      </Atoms.Container>
    </Templates.BasicTemplate>
  )
}

export default TagDetailPage
