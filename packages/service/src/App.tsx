import React, { useEffect, useState } from 'react'
import Amplify from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
//
import { NavigationContextProvider } from './contexts/NavigationContext'
import { PrivateRouter } from './Routes'

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
        <NavigationContextProvider>
          <PrivateRouter />
        </NavigationContextProvider>
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
