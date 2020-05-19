import React from 'react';

const ViewUser = (props) => {
  console.log("view")
  return <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.data.length > 0 ? (
        props.data.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button onClick={() => props.editUserRow(user)}>Edit</button>
              <button onClick={() => props.deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
    </tbody>
  </table>
}
export default ViewUser;