import React, { Component } from 'react';

export default class AdminBar extends Component {

  uploadPhoto() {

  }

  render() {
    return (
      <div className="admin-bar">
        <a onClick={this.uploadPhoto.bind(this)} download title="upload photo" className="control-btn upload" />
      </div>
    )
  }
}
