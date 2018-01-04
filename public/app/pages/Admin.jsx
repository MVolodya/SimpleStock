import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx';
import Images from '../components/Images.jsx';
import Header from '../components/Header.jsx';
import AdminBar from '../components/AdminBar.jsx';


export default class About extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      searchText: ''
    }
  }

  login() {
    this.setState({
      loggedIn: true
    });
  }

  handleSearch(searchText) {
    this.setState({
      searchText
    });
  }

  render() {

    if (!this.state.loggedIn) {
      return (
        <div>
          <div className="container header">
            <div className="logo-search">
              <div className="logo-wrapper">
                Simple
              </div>
            </div>
          </div>
          <div className="container">
            <LoginForm login={this.login.bind(this)} />
          </div>
        </div>
      )
    }

    return (
      <div className="wrapper">
        <Header admin handleSearch={this.handleSearch.bind(this)} />
        <Images admin searchText={this.state.searchText} />
      </div>
    )
  }
}
