import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchText: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.searchText);
  }

  handleChange(e) {
    this.setState({
      searchText: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input onChange={this.handleChange.bind(this)} className="form-control" placeholder="Search..." type="text" />
            <button type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
