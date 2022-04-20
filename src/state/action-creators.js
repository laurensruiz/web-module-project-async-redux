import { GET_RANDOM_ACTIVITY } from './action-types'
import axios from 'axios'

export const fetchDataApi = () => dispatch => {
    axios.get('https://www.boredapi.com/api/activity')
      .then(res => {
        dispatch({ type: GET_RANDOM_ACTIVITY, payload: res.data })
      })
      .catch(err => {
        debugger
      })
  }

