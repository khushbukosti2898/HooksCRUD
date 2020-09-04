import React, { useState } from 'react';
import { Button, Form } from 'reactstrap';
import InputBox from '../components/CommonComponents/InputBox'

const AddUser = (props) => {
  console.log("add");
  const initialFormState = { id: null, name: '', username: '' };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleAddUser = e => {
    e.preventDefault()
    if (!user.name || !user.username) return
    props.addUser(user)
    setUser(initialFormState)
  }
  console.log("")
  return (
    <Form onSubmit={handleAddUser}>
      <h3>Add User</h3>
      <InputBox name="name" placeholder="enter name" value={user.name} onChange={handleInputChange} />
      <InputBox name="username" placeholder="enter username" value={user.username} onChange={handleInputChange} />
      <Button>Submit</Button>
    </Form>
  );
}

export default AddUser;