import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinner-container">
<div className='loader'>
    <Loader
    type="RevolvingDot"
    color="rgb(9, 65, 68)"
    height="50"
    width="50"
 />
 </div>
</div>
      </div>
    )
  }
}

export default Spinner
