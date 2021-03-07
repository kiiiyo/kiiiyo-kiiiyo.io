import React, { FC } from 'react'

import { Templates, Organisms } from '../../../components'

/**
 * Presenter
 */

export const DashboardPagePresenter: FC = () => {
  return (
    <Templates.BasicTemplate
      headerBar={<Organisms.HeaderBar />}
      sidebar={<div>sidebar</div>}
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
