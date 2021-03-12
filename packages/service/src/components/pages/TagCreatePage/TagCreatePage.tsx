import React, { FC } from 'react'

import { Templates, Organisms } from '../../../components'

/**
 * Presenter
 */

export const TagCreatePage: FC = () => {
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'TAG' }} />}
    >
      記事追加画面
    </Templates.BasicTemplate>
  )
}

export default TagCreatePage
