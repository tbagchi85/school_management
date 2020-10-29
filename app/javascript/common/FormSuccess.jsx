import React from 'react'
import shortid from 'shortid'

export default class FormSuccess extends React.Component {
  render() {
    const { error_messages, error_title } = this.props
    const display_message = error_messages.map((msg) =>
      <span key={shortid.generate()}>{msg}</span>
    );
    const error_header = error_title ? <>
      <h4 className="alert-heading">{error_title}</h4>
      <hr></hr>
    </> : ''

    return (
    	<div className='error-alert alert-success'>
        {error_header}
{/*        <button aria-label="Close" className="close" data-dismiss="alert"
          type="button" onClick={this.onClick}>
          <span aria-hidden="true">
            <i className="fa fa-times" aria-hidden="true"></i>
          </span>
        </button>*/}
        <strong><i className="fa fa-check-circle"></i></strong>
        <span className="alert_message_section">
          {display_message}
        </span>
      </div>
    )
  }
}
