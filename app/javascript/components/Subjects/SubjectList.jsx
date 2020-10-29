import React from 'react'
import shortid from 'shortid'
import { Link } from 'react-router'

import TeacherList from './TeacherList';
import StudentList from './StudentList';

function SubjectList(props) {
  const { subject } = props
  return (
    <tr key={shortid.generate()}>
      <td>{subject.name}</td>
      <td>{subject.education}</td>
      <td><TeacherList teachers={subject.teachers} /></td>
      <td><StudentList students={subject.students} /></td>
      <td>
        <p><Link to='#'>Edit</Link></p>
        <p><Link to='#'>Delete</Link></p>
      </td>
    </tr>
  )
}

export default SubjectList
