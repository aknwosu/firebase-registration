import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { useForm } from 'react-hook-form';


import { registerUser } from "../../actions/user";
function Register(props) {
    return (
      <div>
        <div></div>
        <button onClick={() => props.dispatchRegister('123', '456')}>Hello</button>
      </div>
    )
}

const mapDispatchToProps = {
    dispatchRegister: registerUser
}

export default connect(null, mapDispatchToProps)(Register)