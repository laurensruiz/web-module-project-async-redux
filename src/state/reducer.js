import { GET_RANDOM_ACTIVITY, GET_DOG } from "./action-types";


const initialState = {
  activity: '',
  type: '',
  dog: '',
}

const reducer =(state = initialState, action) =>{
  switch (action.type) {
    case GET_RANDOM_ACTIVITY:
      return {
        ...state,
        activity: action.payload.activity,
        type: action.payload.type,
      }
      case GET_DOG:
      return {
        ...state,
        dog: action.payload.message,
      }
    default:
      return (state)
  }
}

export default reducer;