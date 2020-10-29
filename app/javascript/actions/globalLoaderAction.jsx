import { SHOW_GLOBAL_LOADER, HIDE_GLOBAL_LOADER } from '../action_types/common'

export function showGlobalLoader() {
  return {
    type: SHOW_GLOBAL_LOADER,
    isLoading: true
  }
}

export function hideGlobalLoader() {
  return {
    type: HIDE_GLOBAL_LOADER,
    isLoading: true
  }
}
