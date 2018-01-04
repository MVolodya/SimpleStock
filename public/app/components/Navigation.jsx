import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LoginPopup from './LoginPopup.jsx';
import PhotoUploadPopup from './PhotoUploadPopup.jsx';


export default class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      loginActive: false,
      popupActive: false
    }
  }

  toggleLogin() {
    this.setState((prevState) => {
      return {loginActive: !prevState.loginActive};
    });
  }

  togglePopup() {
    this.setState((prevState) => {
      return {popupActive: !prevState.popupActive};
    });
  }

  renderLogin() {
    if (!this.props.user) {
      return (
        <span>
          <a onClick={this.toggleLogin.bind(this)}>Log in</a>
          <LoginPopup loginUser={this.props.loginUser} toggleLogin={this.toggleLogin.bind(this)} isActive={this.state.loginActive} />
        </span>
      );
    }

    return (
      <span>
        <a onClick={this.togglePopup.bind(this)} >Upload photo</a>
        <PhotoUploadPopup reloadImages={this.props.reloadImages} togglePopup={this.togglePopup.bind(this)} isActive={this.state.popupActive} user={this.props.user} />
        <a>Log out</a>
      </span>
    );
  }

  render() {
    return (
      <div className="navigation">
        <NavLink activeClassName="active" exact to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/About">About</NavLink>
        {this.renderLogin()}
      </div>
    );
  }
}
