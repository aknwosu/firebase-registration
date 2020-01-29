import  React, { Component } from 'react'
import { connect } from 'react-redux'
class Home extends Component {
  render() {
    return(
      <div>A place like home</div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  console.log("state===", state)
  return {
    prop: state.prop
  }
}
export default connect(mapStateToProps)(Home)