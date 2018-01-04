import React, { Component } from 'react';
import { getUserByEmail } from '../helpers.js';


export default class UserLogin extends Component {
  constructor() {
    super();

    this.state = {
      loginText: '',
      passText: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    getUserByEmail(this.state.loginText, (user) => {
      if (user.email === this.state.loginText && user.password === this.state.passText) {
        console.log('loggedIn');
        this.props.loginUser(user);
      }
    });
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
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input onChange={this.handleChangeLogin.bind(this)} className="form-control" placeholder="Email" type="text" />
            <input onChange={this.handleChangePass.bind(this)} className="form-control" placeholder="Password" type="text" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
