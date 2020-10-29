import React, { Component } from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import queryString from 'query-string'

import { fetchStudent } from '../../actions/studentsAction';
import StudentList from '../../components/Students/StudentList';
import TeacherTable from '../../components/Teachers/TeacherTable';
import SubjectTable from '../../components/Subjects/SubjectTable';
import { hideGlobalLoader } from '../../actions/globalLoaderAction'

class StudentLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      student: { subjects: [], teachers: [] }
    }
  }

  componentDidMount() {
    const { student_id } = this.props.params
    this.props.fetchStudent(student_id).
      then( response => {
        const { student } = response.data
        window.scrollTo(0, 0)
        this.setState({ student: student })
        this.props.hideGlobalLoader()
    })
  }

  render(){
    const { student } = this.state

    return (
      <main id="main">
        <section id="portfolio" className="portfolio section-bg">
          <div className="container" data-aos="">
            <header className="section-header">
              <h3 className="section-title">Student Info</h3>
            </header>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p><strong>Name</strong> {student.name}</p>
                  <p><strong>Roll Number</strong> {student.roll_number}</p>
                  <p><strong>House</strong> {student.house}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h5 className="section-title">Associated Subjects</h5>
                  { student.subjects && <SubjectTable subjects={student.subjects} /> }
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h5 className="section-title">Associated Teachers</h5>
                  { student.teachers && <TeacherTable teachers={student.teachers} /> }
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default connect(null, { fetchStudent, hideGlobalLoader })(StudentLists)
