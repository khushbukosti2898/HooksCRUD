import React, { useState, /* useEffect */ useMemo, useCallback, useContext } from 'react';
import ViewUser from './viewUser';
import AddUser from './addUser';
import Title from './title';
import EditUser from './editUser';
import Search from './search';
import { headingContext } from './useContext';

const App = () => {
  const usersData = [
    { id: 1, name: 'ABC', username: 'XYZ' },
    { id: 2, name: 'aaa', username: 'XYZ' },
    { id: 3, name: 'zzz', username: 'XYZ' },
  ]
  const initialFormState = { id: null, name: '', username: '' }
  const [users, setUsers] = useState(usersData);
  const [counter, setCounter] = useState(4)
  const [title, setTitle] = useState("HOOKS CURD DEMO");
  const [edit, setEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = user => {
    setCounter(counter + 1)
    user.id = counter
    setUsers([...users, user])
  }

  const deleteUser = useCallback(id => {
    setUsers(users.filter(user => user.id !== id))
  }, [users]);

  const updateUser = (id, updatedUser) => {
    setEdit(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editUserRow = user => {
    setEdit(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const myTitle = useMemo(() => <Title title={title} />, [title]);
  const search = useMemo(() => <Search data={users} />, [users])

  return (<>
    <headingContext.Provider heading="context example">
      {myTitle}
      {search}
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
    </headingContext.Provider>
  </>);
}
export default App;