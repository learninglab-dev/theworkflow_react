import React from "react"

class Shoot extends React.Component {
  render () {
    return (
      <div>
        <h2>
          {this.props.shootId}
        </h2>
        <p>
          a shoot!
        </p>
      </div>
    )
  }
}

export default Shoot
