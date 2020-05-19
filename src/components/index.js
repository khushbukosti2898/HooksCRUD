import React, { useState, /* useEffect */ useMemo, useCallback } from 'react';
import ViewUser from './viewUser';
import AddUser from './addUser';
import Title from './title';
import EditUser from './editUser';

const App = () => {
  const usersData = [
    { id: 1, name: 'ABC', username: 'XYZ' },
    { id: 2, name: 'ABC', username: 'XYZ' },
    { id: 3, name: 'ABC', username: 'XYZ' },
  ]
  const initialFormState = { id: null, name: '', username: '' }
  const [users, setUsers] = useState(usersData);
  const [title, setTitle] = useState("HOOKS CURD DEMO");
  const [edit, setEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = useCallback(id => {
    setUsers(users.filter(user => user.id !== id))
  }, [users]);

  const updateUser = (id, updatedUser) => {
    console.log(updatedUser)
    setEdit(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editUserRow = user => {
    setEdit(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const myTitle = useMemo(() => <Title title={title} />, [title])

  return (<>
    {myTitle}
    <ViewUser data={users}
      deleteUser={deleteUser}
      editUserRow={editUserRow}
    />
    {edit ? (<EditUser
      edit={edit}
      setEdit={setEdit}
      currentUser={currentUser}
      updateUser={updateUser}
    />) : (<AddUser addUser={addUser} />)}
  </>);
}
export default App;