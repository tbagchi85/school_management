import React from 'react'
import { Link } from 'react-router'

import shortid from 'shortid'

function TeacherList(props) {
  const { teachers } = props
  const allTeacherList = teachers.map(teacher =>
    <li key={shortid.generate()}>
      <Link to={"/teachers/" + teacher.id}>{teacher.name}</Link>
    </li>
  )
  return (
    <ul>{allTeacherList}</ul>
  )
}

export default TeacherList;
