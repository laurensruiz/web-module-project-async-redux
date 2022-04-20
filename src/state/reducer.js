import { GET_RANDOM_ACTIVITY } from "./action-types";


const initialState = {
  activity: '',
}

const reducer =(state = initialState, action) =>{
  switch (action.type) {
    // case GET_RANDOM_ACTIVITY:
    //   return {
    //     ...state,
    //     activity: [action.payload]
    //   }
    default:
      return (state)
  }
}

export default reducer;