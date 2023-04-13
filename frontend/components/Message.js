import React from 'react'
import { connect } from 'react-redux'

// key for state should be "wheel"
const mapStateToProps = state => {
  return {
    infoMessage: state.infoMessage
  }
}

function Message(props) {
  return <div id="message">{props.infoMessage}</div>
}

export default connect(mapStateToProps, {})(Message)
