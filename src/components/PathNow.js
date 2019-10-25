import React from 'react'
import { withRouter } from 'react-router'

const PathNow = props => {
  return (
    <>
      <h5>您現在的位置是: {props.location.pathname}</h5>
    </>
  )
}

export default withRouter(PathNow)
