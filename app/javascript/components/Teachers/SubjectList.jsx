import React from 'react'
import { Link } from 'react-router'

import shortid from 'shortid'

function SubjectList(props) {
  const { subjects } = props
  const allSubjectList = subjects.map(subject =>
    <li key={shortid.generate()}>
      <Link to={"/subjects/" + subject.id}>{subject.name}</Link>
    </li>
  )
  return (
    <ul>{allSubjectList}</ul>
  )
}

export default SubjectList
