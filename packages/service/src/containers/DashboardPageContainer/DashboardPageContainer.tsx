import { FC } from 'react'
//
import { Pages } from '../../components'
//import { listArticles } from '../../graphql/queries'

export const DashboardPageContainer: FC = (props) => {
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await API.graphql(graphqlOperation(listArticles))
  //     console.log(response)
  //   }
  //   fetchData()
  // }, [])
  return <Pages.DashboardPage />
}

export default DashboardPageContainer
