import React, { useEffect, useState } from 'react'
import Amplify from 'aws-amplify'
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
} from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
//
import { config } from './libs/amplify/config'

Amplify.configure(config)
const theme = createMuiTheme({})

function App() {
  const [authState, setAuthState] = useState<any>(null)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <>
      {/* Signed Pages */}
      <ThemeProvider theme={theme}>
        <div className="App">
          <div>Hello, {user.username}</div>
          <Button variant="contained">Default</Button>
          <AmplifySignOut />
        </div>
      </ThemeProvider>
    </>
  ) : (
    <>
      {/* Unsigned */}
      <AmplifyAuthenticator>
        <AmplifySignIn slot="sign-in" hideSignUp />
      </AmplifyAuthenticator>
    </>
  )
}

export default App
