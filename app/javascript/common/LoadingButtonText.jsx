import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default class LoadingButtonText extends React.Component {
  render() {
    const { isLoading, loadingText, buttonText} = this.props
    if(isLoading === true){
      return (
        <span>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />{loadingText}
        </span>
      )
    } else {
      return (
        <span>{buttonText}</span>
      )
    }

  }
}
