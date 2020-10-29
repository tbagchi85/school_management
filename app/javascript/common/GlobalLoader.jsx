import React from 'react'
import { connect } from 'react-redux'

class GlobalLoader extends React.Component {
  render() {
    const { isLoading } = this.props.globalLoader
    if(isLoading === true){
      return (
        <div className="loading"></div>
      )
    } else {
      return ''
    }
  }
}

function mapStatetoProps(state) {
  return {
    globalLoader: state.globalLoader
  }
}
export default connect(mapStatetoProps, {})(GlobalLoader)
