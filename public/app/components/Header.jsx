import React, { Component } from 'react';
import Search from './Search.jsx';
import Navigation from './Navigation.jsx';


export default class Header extends Component {
  render() {
    const nav = [];

    if (this.props.admin) {
      nav.push(
        <div key={Date.now + 'nav'} className="navigation">
          <a>Log out</a>
        </div>);
    } else {
      nav.push(<Navigation key={Date.now + 'nav'} user={this.props.user} reloadImages={this.props.reloadImages} loginUser={this.props.loginUser} />);
    }

    return (
      <div className="container header">
        <div className="logo-search">
          <div className="logo-wrapper">
            Simple
          </div>
          <Search onSubmit={this.props.handleSearch} />
        </div>
        {nav}
      </div>
    );
  }
}
