import axios from '../config/axiosConfiguration'
import { showGlobalLoader } from './globalLoaderAction'

export const fetchSubjects = () => {
  return dispatch => {
    dispatch(showGlobalLoader())
    return axios.get('/subjects')
  }
}
