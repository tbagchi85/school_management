import React, { Component } from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import Table from 'react-bootstrap/Table';

import { fetchSubjects } from '../../actions/subjectsAction';
import SubjectList from '../../components/Subjects/SubjectList';
import { hideGlobalLoader } from '../../actions/globalLoaderAction'

class SubjectLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subjects: []
    }
  }

  componentDidMount() {
    this.props.fetchSubjects().
      then( response => {
        const { subjects } = response.data
        window.scrollTo(0, 0)
        this.setState({ subjects: subjects })
        this.props.hideGlobalLoader()
    })
  }

  render(){
    const { subjects } = this.state
    const allSubjectLists = subjects.map(subject =>
      <SubjectList subject={subject} key={shortid.generate()} />
    )
    return (
      <main id="main">
        <div className="float-right">
          <Link to='#' onClick={(e) => {
              e.preventDefault()
              this.addStudentClick()
            }} className='add_new_record'>
            <i className="fa fa-plus">
              Add Student
            </i>
          </Link>
        </div>
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
                        <th>Description</th>
                        <th>Teachers</th>
                        <th>Students</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allSubjectLists}
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

export default connect(null, { fetchSubjects, hideGlobalLoader })(SubjectLists)
