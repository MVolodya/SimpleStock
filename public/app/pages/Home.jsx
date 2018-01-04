import React, { Component } from 'react';
import Images from '../components/Images.jsx';
import Header from '../components/Header.jsx';


export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      user: null,
      reloadImages: ''
    };
  }

  handleSearch(searchText) {
    this.setState({
      searchText
    });
  }

  reloadImages() {
    this.setState({reloadImages: Date.now});
  }

  loginUser(user) {
    this.setState({user});
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          user={this.state.user}
          loginUser={this.loginUser.bind(this)}
          handleSearch={this.handleSearch.bind(this)}
          reloadImages={this.reloadImages.bind(this)}
        />
        <Images user={this.state.user} reloadImages={this.state.reloadImages} searchText={this.state.searchText} />
      </div>
    )
  }
}
