import React from 'react'
import shortid from 'shortid'
import { Link } from 'react-router'

function SubjectRow(props) {
  const { subject } = props
  return (
    <tr key={shortid.generate()}>
      <td>{subject.name}</td>
      <td>{subject.description}</td>
      <td>
        <p><Link to='#'>Edit</Link></p>
        <p><Link to='#'>Delete</Link></p>
        <p><Link to={"/subjects/" + subject.id}>View</Link></p>
      </td>
    </tr>
  )
}

export default SubjectRow
