import axios from '../config/axiosConfiguration'
import { showGlobalLoader } from './globalLoaderAction'

export const fetchStudents = () => {
  return dispatch => {
    dispatch(showGlobalLoader())
    return axios.get('/students')
  }
}

export const fetchStudent = (student_id) => {
  return dispatch => {
    dispatch(showGlobalLoader())
    return axios.get(`students/${student_id}`)
  }
}
