import React, { Component } from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import Table from 'react-bootstrap/Table';

import { fetchTeachers } from '../../actions/teachersAction';
import TeacherList from '../../components/Teachers/TeacherList';
import { hideGlobalLoader } from '../../actions/globalLoaderAction'

class TeacherLists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teachers: []
    }
  }

  componentDidMount() {
    this.props.fetchTeachers().
      then( response => {
        const { teachers } = response.data
        window.scrollTo(0, 0)
        this.setState({ teachers: teachers })
        this.props.hideGlobalLoader()
    })
  }

  render(){
    const { teachers } = this.state
    const allTeacherLists = teachers.map(teacher =>
      <TeacherList teacher={teacher} key={shortid.generate()} />
    )
    return (
      <main id="main">
        <section id="portfolio" className="portfolio section-bg">
          <div className="container" data-aos="">
            <header className="section-header">
              <h3 className="section-title">Teacher Lists</h3>
            </header>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Education</th>
                        <th>Subjects</th>
                        <th>Students</th>
                        <th>#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allTeacherLists}
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

export default connect(null, { fetchTeachers, hideGlobalLoader })(TeacherLists)
