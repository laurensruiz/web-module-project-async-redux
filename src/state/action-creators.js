import { GET_RANDOM_ACTIVITY, GET_DOG } from './action-types'
import axios from 'axios'

export const fetchDataApi = () => dispatch => {
    axios.get('https://www.boredapi.com/api/activity')
      .then(res => {
        dispatch({ type: GET_RANDOM_ACTIVITY, payload: res.data })
      })
      .catch(err => {
        console.error(err)
      })
  }

  export const fetchDog = () => dispatch => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
          console.log(res.data.message)
        dispatch({ type: GET_DOG, payload: res.data })
      })
      .catch(err => {
        console.error(err)
      })
  }

