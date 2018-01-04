import React, { Component } from 'react';
import UserLogin from './UserLogin.jsx';
import UserRegister from './UserRegister.jsx';

export default class LoginPopup extends Component {
  constructor() {
    super();

    this.state = {
      login: true
    }
  }


  className() {
    return this.props.isActive ? 'popup-background active' : 'popup-background';
  }

  toggleLoginRegistration() {
    this.setState((prevState) => {
      return {login: !prevState.login}
    });
  }

  renderLoginRegistration() {
    if (!this.state.login) {
      return (
        <div>
          <UserRegister loginUser={this.props.loginUser} />
          <a className="login-regester-toggle" onClick={this.toggleLoginRegistration.bind(this)}>Have account? Login!</a>
        </div>
      );
    }

    return (
      <div>
        <UserLogin loginUser={this.props.loginUser} />
        <a className="login-regester-toggle" onClick={this.toggleLoginRegistration.bind(this)}>Don't have an account? Register!</a>
      </div>
    );
  }


  render() {
    return (
      <div className={this.className()}>
        <div className="img-control-bar">
          <a onClick={this.props.toggleLogin} className="control-btn close" title="close" />
        </div>
        <div className="login-popup">
          {this.renderLoginRegistration()}
        </div>
      </div>
    );
  }
}
