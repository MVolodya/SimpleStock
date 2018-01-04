import React, { Component } from 'react';
import { createUser } from '../helpers.js';


export default class UserRegister extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    createUser(userData, (user) => {
        this.props.loginUser(user);
    });
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleChangePass(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  render() {
    return (
      <div className="login-form">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input onChange={this.handleChangeName.bind(this)} className="form-control" placeholder="Name" type="text" />
            <input onChange={this.handleChangeEmail.bind(this)} className="form-control" placeholder="Email" type="text" />
            <input onChange={this.handleChangePass.bind(this)} className="form-control" placeholder="Password" type="text" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
