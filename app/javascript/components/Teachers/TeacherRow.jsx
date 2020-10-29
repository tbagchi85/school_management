import React from 'react'
import shortid from 'shortid'
import { Link } from 'react-router'

function TeacherRow(props) {
  const { teacher } = props
  return (
    <tr key={shortid.generate()}>
      <td>{teacher.name}</td>
      <td>{teacher.education}</td>
      <td>
        <p><Link to='#'>Edit</Link></p>
        <p><Link to='#'>Delete</Link></p>
        <p><Link to={"/teachers/" + teacher.id}>View</Link></p>
      </td>
    </tr>
  )
}

export default TeacherRow
