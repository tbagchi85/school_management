import React from 'react'
import { Link } from 'react-router'
import Table from 'react-bootstrap/Table';

import shortid from 'shortid'
import SubjectRow from './SubjectRow'

function SubjectTable(props) {
  const { subjects } = props
  const allSubjectLists = subjects.map(subject =>
    <SubjectRow subject={subject} key={shortid.generate()} />
  )
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {allSubjectLists}
      </tbody>
    </Table>
  )
}

export default SubjectTable;
