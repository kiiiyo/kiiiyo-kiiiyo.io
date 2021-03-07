import React, { FC } from 'react'

import { Templates, Organisms } from '../../../components'

/**
 * Presenter
 */

export const DashboardPagePresenter: FC = () => {
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<Organisms.Sidebar state={{ currentMenu: 'HOME' }} />}
    >
      メインコンテンツ
    </Templates.BasicTemplate>
  )
}

/**
 * Merge
 */

export const DashboardPage: FC = () => {
  return <DashboardPagePresenter />
}

export default DashboardPage
