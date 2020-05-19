import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const EditUser = (props) => {
  console.log("edit");
  const [user, setUser] = useState(props.currentUser)

  useEffect(() => { setUser(props.currentUser) }, [props])

  const handleInputChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleEditUser = e => {
    e.preventDefault();
    props.updateUser(user.id, user)
  }

  return (
    <Form onSubmit={handleEditUser}>
      <h3>Edit User</h3>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" placeholder="enter name" value={user.name} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label>UserName</Label>
        <Input type="text" name="username" placeholder="enter username" value={user.username} onChange={handleInputChange} />
      </FormGroup>
      <Button>Edit</Button>
    </Form>
  );
}
export default EditUser;