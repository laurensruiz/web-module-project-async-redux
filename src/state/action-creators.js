import { GET_RANDOM_ACTIVITY } from './action-types'
import axios from 'axios'

export const getActivityfromApi = () => dispatch => {
    axios.get('https://www.boredapi.com/api/activity')
      .then(res => {
        dispatch({ type: GET_RANDOM_ACTIVITY, payload: res.data.activity })
      })
      .catch(err => {
        console.error(err)
      })
  }