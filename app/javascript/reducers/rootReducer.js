import { combineReducers } from 'redux'
import flashMessages from './flashMessages'
import globalLoader from './globalLoader'

export default combineReducers({
  flashMessages,
  globalLoader
})
