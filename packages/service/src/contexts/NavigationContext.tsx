import React, { FC, createContext, useState, useCallback } from 'react'

/**
 * Interface
 */

export type State = {
  isDrawerDisplay: boolean
}

export type Actions = {
  handleDrawerDisplay: (condition: boolean) => void
}

export type NavigationContextValueType = {
  state: State
  actions: Actions
}

/**
 * Context
 */

const initContextValue: NavigationContextValueType = {
  state: {
    isDrawerDisplay: false,
  },
  actions: {
    handleDrawerDisplay: () => {},
  },
}

export const NavigationContext = createContext<NavigationContextValueType>(
  initContextValue
)

/**
 * Hooks
 */

export const useNavigation = (): NavigationContextValueType => {
  // State
  const [isDrawerDisplay, setDrawerDisplay] = useState(false)
  // Actions
  const handleDrawerDisplay = useCallback(
    (condition) => {
      setDrawerDisplay(condition)
    },
    [setDrawerDisplay]
  )

  return {
    state: { isDrawerDisplay },
    actions: { handleDrawerDisplay },
  }
}

/**
 * Provider
 */

export const NavigationContextProvider: FC = ({ children }) => {
  const { state, actions } = useNavigation()
  return (
    <NavigationContext.Provider value={{ state, actions }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const NavigationContextConsumer = NavigationContext.Consumer

export default NavigationContext
