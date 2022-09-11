import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addContact, getListContact} from '../../store/actions/contactAction'

const AddContact = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [nomor, setNomor] = useState("");

  const { loading } = useSelector((state) => state.contactReducer)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm()
    dispatch(addContact({
      name,
      nomor
    }));
  }

  const clearForm = () => {
    setName("");
    setNomor("");
  }

  useEffect(() => {
    if(loading) {
      dispatch(getListContact());
    }
  }, [loading, dispatch])
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" placehlder="Masukkan Nama" value={name} onChange={(e) => setName(e.target.value)}/>
        <br/>
        <input type="text" name="nomor" placehlder="Masukkan Nomor" value={nomor} onChange={(e) => setNomor(e.target.value)}/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddContact
