import axios from 'axios';

export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const DETAIL_CONTACT = "DETAIL_CONTACT";

export const getListContact = () => {
  console.log('getlist');
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_CONTACT,
      payload: {
        loading: true,
        data: [],
        errorMessage: ""
      }
    })

    axios({
      method: "GET",
      url: "http://localhost:3000/contact",
      timeout: 120000
    })
    .then(response => {
      // berhasil
      dispatch({
        type: GET_LIST_CONTACT,
        payload: {
          loading: false,
          data: response.data,
          errorMessage: ""
        }
      })
    })
    .catch(error => {
      // error
      dispatch({
        type: GET_LIST_CONTACT,
        payload: {
          loading: false,
          data: [],
          errorMessage: error.message
        }
      })
    })
  }
}

export const addContact = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: ADD_CONTACT,
      payload: {
        loading: true,
      }
    })

    axios({
      method: "POST",
      url: "http://localhost:3000/contact",
      timeout: 120000,
      data: data
    })
    .then(response => {
      // berhasil
      dispatch({
        type: ADD_CONTACT,
        payload: {
          loading: false,
        }
      })
    })
    .catch(error => {
      // error
      dispatch({
        type: ADD_CONTACT,
        payload: {
          loading: false,
          errorMessage: error.message
        } 
      })
    })
  }
}

export const deleteContact = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        loading: true,
      }
    })

    axios({
      method: 'DELETE',
      url: `http://localhost:3000/contact/${id}`,
      timeout: 120000,
    })
    .then(response => {
      // berhasil
      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: false,
        }
      })
    })
    .catch(error => {
      // error
      dispatch({
        type: DELETE_CONTACT,
        payload: {
          loading: false,
          errorMessage: error.message
        } 
      })
    })
  }
}

export const detailContact = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_CONTACT,
      payload: {
        data
      }
    })
  }
}