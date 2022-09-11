import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListContact, deleteContact } from '../../store/actions/contactAction';
import axios from 'axios';

const index = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, data, errorMessage} = useSelector(state => state.contactReducer)
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // get list contact
    dispatch(getListContact());
    
  }, [])
  return (
    <div>
      <h4>List Contact</h4>
      {
        data !== [] ? data.map((item) => {
          return (
            <p key={item.id}>{item.name} - {item.nomor} <button onClick={(e) => dispatch(deleteContact(item.id))}>delete</button> <button >edit</button></p>
          )
        })
        : 'Data kosong'
      }
      {
        loading && (
          <p>Loading....</p>
        )
      }
      {
        errorMessage && errorMessage
      }
    </div>
  )
}

export default index
