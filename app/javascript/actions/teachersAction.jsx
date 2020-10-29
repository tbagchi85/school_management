import axios from '../config/axiosConfiguration'
import { showGlobalLoader } from './globalLoaderAction'

export const fetchTeachers = () => {
  return dispatch => {
    dispatch(showGlobalLoader())
    return axios.get('/teachers')
  }
}

export const fetchTeacher = (teacher_id) => {
  return dispatch => {
    dispatch(showGlobalLoader())
    return axios.get(`teachers/${teacher_id}`)
  }
}
