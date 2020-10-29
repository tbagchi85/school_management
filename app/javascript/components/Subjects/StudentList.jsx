import React from 'react'
import { Link } from 'react-router'

import shortid from 'shortid'

function StudentList(props) {
  const { students } = props
  const allStudentList = students.map(student =>
    <li key={shortid.generate()}>
      <Link to={"/students/" + student.id}>{student.name}</Link>
    </li>
  )
  return (
    <ul>{allStudentList}</ul>
  )
}

export default StudentList
