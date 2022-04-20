import { GET_RANDOM_ACTIVITY } from "./action-types";


const initialState = {
  activity: '',
  type: '',
}

const reducer =(state = initialState, action) =>{
  switch (action.type) {
    case GET_RANDOM_ACTIVITY:
      return {
        ...state,
        activity: action.payload.activity,
        type: action.payload.type,
      }
    default:
      return (state)
  }
}

export default reducer;