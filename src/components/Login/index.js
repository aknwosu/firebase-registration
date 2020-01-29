import React, { useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

import { loginUser } from "../../actions/user";

const  Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = () => {
    console.log(props)
    const { dispatchLogin } = props
    dispatchLogin(email, password)
  }
  return (
    <div>
      <input value={email} onChange={({ target: { value } }) => setEmail(value) }/>
      <input value={password} type="password" onChange={({ target: { value } }) => setPassword(value)} />
      <button onClick={loginUser}>Login</button>
    </div>
  )
}
const mapStateToProps = (state) => {
 console.log(state)
 return {}
}
const  mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchLogin: bindActionCreators(loginUser, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)