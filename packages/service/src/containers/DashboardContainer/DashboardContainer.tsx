import { FC } from 'react'
import Button from '@material-ui/core/Button'
import { Auth } from 'aws-amplify'

export const DashboardContainer: FC = (props) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={async () => {
          try {
            await Auth.signOut()
          } catch (error) {
            console.log('error signing out: ', error)
          }
        }}
      >
        Logout
      </Button>
      <div>Dashbod</div>
    </>
  )
}

export default DashboardContainer
