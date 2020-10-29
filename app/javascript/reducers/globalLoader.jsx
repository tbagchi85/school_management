import { SHOW_GLOBAL_LOADER, HIDE_GLOBAL_LOADER } from '../action_types/common'

export default (state={ isLoading: false }, action={}) => {
	switch(action.type){
		case SHOW_GLOBAL_LOADER:
      return { isLoading: true }
    case HIDE_GLOBAL_LOADER:
      return { isLoading: false }
    default: return state
	}
}
