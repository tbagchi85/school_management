import React from 'react'
import { Link } from 'react-router'
import Table from 'react-bootstrap/Table';

import shortid from 'shortid'
import StudentRow from './StudentRow'

function StudentTable(props) {
  const { students } = props
  const allStudentLists = students.map(student =>
    <StudentRow student={student} key={shortid.generate()} />
  )
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll Number</th>
          <th>House</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {allStudentLists}
      </tbody>
    </Table>
  )
}

export default StudentTable;
