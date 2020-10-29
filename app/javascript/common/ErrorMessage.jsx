import React from 'react'

export default class ErrorMessage extends React.Component {
  render() {
    const messages = this.props.error_messages
    const display_message = messages.map((msg, index) =>
      <li key={index} className='errorMessage'>{msg}</li>
    );
    return (
      <span className='help-block'><ul>{display_message}</ul></span>
    )
  }
}
