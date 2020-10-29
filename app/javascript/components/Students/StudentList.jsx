import React from 'react'
import shortid from 'shortid'
import { Link } from 'react-router'

import SubjectList from './SubjectList';
import TeacherList from './TeacherList';

function StudentList(props) {
  const { student } = props
  return (
    <tr key={shortid.generate()}>
      <td>{student.name}</td>
      <td>{student.roll_number}</td>
      <td>{student.house}</td>
      <td><SubjectList subjects={student.subjects} /></td>
      <td><TeacherList teachers={student.teachers} /></td>
      <td>
        <p><Link to='#'>Edit</Link></p>
        <p><Link to='#'>Delete</Link></p>
        <p><Link to={"/students/" + student.id}>View</Link></p>
      </td>
    </tr>
  )
}

export default StudentList
