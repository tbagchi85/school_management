import React from 'react'
import shortid from 'shortid'
import { Link } from 'react-router'

function StudentRow(props) {
  const { student } = props
  return (
    <tr key={shortid.generate()}>
      <td>{student.name}</td>
      <td>{student.roll_name}</td>
      <td>{student.house}</td>
      <td>
        <p><Link to='#'>Edit</Link></p>
        <p><Link to='#'>Delete</Link></p>
        <p><Link to={"/students/" + student.id}>View</Link></p>
      </td>
    </tr>
  )
}

export default StudentRow
