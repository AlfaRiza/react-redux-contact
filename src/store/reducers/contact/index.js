import { 
  GET_LIST_CONTACT, 
  ADD_CONTACT,
  DELETE_CONTACT,
  DETAIL_CONTACT
} from '../../actions/contactAction'

const initialState = {
  loading: false,
  data: [],
  errorMessage: ""
}

const contact = (state = initialState, action) => {
  const { type, payload } = action
  switch(action.type) {
    case GET_LIST_CONTACT: 
      console.log('GET_LIST_CONTACT')
      return {
        ...state,
        loading: action.payload.loading,
        data: action.payload.data,
        errorMessage: action.payload.errorMessage
      }
    case ADD_CONTACT: 
      console.log('ADD_CONTACT')
      return {
        ...state,
        loading: action.payload.loading,
        // data: action.payload.data,
        // errorMessage: action.payload.errorMessage
      }
    case DELETE_CONTACT: 
      return {
        ...state,
        loading: action.payload.loading,
        // data: action.payload.data,
        // errorMessage: action.payload.errorMessage
      }
    case DETAIL_CONTACT:
      return {
        ...state,
        data: payload.data
      }
    default :
      console.log('reducer')
      return state
  }
}

export default contact;