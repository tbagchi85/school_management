import React, { Component } from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import queryString from 'query-string'

import { fetchTeacher } from '../../actions/teachersAction';
import teacherList from '../../components/Teachers/TeacherList';
import StudentTable from '../../components/Students/StudentTable';
import SubjectTable from '../../components/Subjects/SubjectTable';
import { hideGlobalLoader } from '../../actions/globalLoaderAction'

class teacherLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teacher: { subjects: [], students: [] }
    }
  }

  componentDidMount() {
    const { teacher_id } = this.props.params
    this.props.fetchTeacher(teacher_id).
      then( response => {
        const { teacher } = response.data
        window.scrollTo(0, 0)
        this.setState({ teacher: teacher })
        this.props.hideGlobalLoader()
    })
  }

  render(){
    const { teacher } = this.state

    return (
      <main id="main">
        <section id="portfolio" className="portfolio section-bg">
          <div className="container" data-aos="">
            <header className="section-header">
              <h3 className="section-title">Teacher Info</h3>
            </header>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <p><strong>Name</strong> {teacher.name}</p>
                  <p><strong>Education</strong> {teacher.education}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h5 className="section-title">Associated Subjects</h5>
                  { teacher.subjects && <SubjectTable subjects={teacher.subjects} /> }
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <h5 className="section-title">Associated Students</h5>
                  { teacher.students && <StudentTable students={teacher.students} /> }
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default connect(null, { fetchTeacher, hideGlobalLoader })(teacherLists)
