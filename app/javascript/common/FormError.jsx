import React from 'react'
import shortid from 'shortid'

export default class FormError extends React.Component {
  render() {
    const { error_messages, error_title } = this.props
    const display_message = error_messages.map((msg) =>
      <li key={shortid.generate()}>{msg}</li>
    );
    const error_header = error_title ? <>
      <h4 className="alert-heading">{error_title}</h4>
      <hr></hr>
    </> : ''

    return (
      <div className="error-alert alert-danger" role="alert">
        {error_header}
        <ul>{display_message}</ul>
      </div>
    )
  }
}
