import { Hooks } from '../../../features'

/**
 * Interface
 */

export type State = {
  isDrawerDisplay: boolean
}

export type Actions = {
  handleDrawerDisplay: (condition: boolean) => void
}

export type useSidebarType = {
  state: State
  actions: Actions
}

/**
 * Hooks
 */

export const useSidebar = () => {
  const {
    state: { isDrawerDisplay },
    actions: { handleDrawerDisplay },
  } = Hooks.Navigation.useNavigation()

  return {
    state: {
      isDrawerDisplay,
    },
    actions: {
      handleDrawerDisplay,
    },
  } as useSidebarType
}
