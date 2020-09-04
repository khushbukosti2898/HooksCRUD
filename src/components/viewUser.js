import React, { useContext } from 'react';
import { headingContext } from './useContext'

const ViewUser = (props) => {
  const msg = useContext(headingContext)
  return <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
        <th>Context</th>
      </tr>
    </thead>
    <tbody>
      {props.data.length > 0 ? (
        props.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button onClick={() => props.editUserRow(user)}>Edit</button>
              <button onClick={() => props.deleteUser(user.id)}>Delete</button>
            </td>
            <td>{msg}</td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No users Found</td>
          </tr>
        )}
    </tbody>
  </table>
}
export default ViewUser;