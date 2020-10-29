import React from 'react'
import { Link } from 'react-router'
import Table from 'react-bootstrap/Table';

import shortid from 'shortid'
import TeacherRow from './TeacherRow'

function TeacherTable(props) {
  const { teachers } = props
  const allTeacherLists = teachers.map(teacher =>
    <TeacherRow teacher={teacher} key={shortid.generate()} />
  )
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Education</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {allTeacherLists}
      </tbody>
    </Table>
  )
}

export default TeacherTable;
