import React from 'react'
import LoginBox from '../components/login/LoginBox'
import './login.less'
class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="login">
        <LoginBox/>
      </div>
    )
  }
}
export default Login
