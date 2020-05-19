import React, { useState, useRef, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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

  // const inputRef = useRef(null);
  // useEffect(() => {
  //   console.log(inputRef)
  //   inputRef.current.focus();
  // }, []);


  return (
    <Form onSubmit={handleAddUser}>
      <h3>Add User</h3>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" placeholder="enter name" value={user.name} /* ref={inputRef} */ onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label>UserName</Label>
        <Input type="text" name="username" placeholder="enter username" value={user.username} onChange={handleInputChange} />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default AddUser;