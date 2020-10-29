import React, { Component } from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import Table from 'react-bootstrap/Table';

import { fetchStudents } from '../../actions/studentsAction';
import StudentList from '../../components/Students/StudentList';
import { hideGlobalLoader } from '../../actions/globalLoaderAction'

class StudentLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    this.props.fetchStudents().
      then( response => {
        const { students } = response.data
        window.scrollTo(0, 0)
        this.setState({ students: students })
        this.props.hideGlobalLoader()
    })
  }

  render(){
    const { students } = this.state
    const allStudentLists = students.map(student =>
      <StudentList student={student} key={shortid.generate()} />
    )
    return (
      <main id="main">
        <section id="portfolio" className="portfolio section-bg">
          <div className="container" data-aos="">
            <header className="section-header">
              <h3 className="section-title">Student Lists</h3>
            </header>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Roll Number</th>
                        <th>House</th>
                        <th>Subjects</th>
                        <th>Teachers</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allStudentLists}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default connect(null, { fetchStudents, hideGlobalLoader })(StudentLists)
