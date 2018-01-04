import React, { Component } from 'react';


export default class LoginForm extends Component {
  constructor() {
    super();

    this.login = 'admin';
    this.pass  = 'admin';

    this.state = {
      loginText: '',
      passText: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.login === this.state.loginText && this.pass === this.state.passText) {
      this.props.login();
    }
  }

  handleChangeLogin(e) {
    this.setState({
      loginText: e.target.value
    })
  }

  handleChangePass(e) {
    this.setState({
      passText: e.target.value
    })
  }

  render() {
    return (
      <div className="admin-login-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input onChange={this.handleChangeLogin.bind(this)} className="form-control" placeholder="Login" type="text" />
            <input onChange={this.handleChangePass.bind(this)} className="form-control" placeholder="Password" type="text" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
