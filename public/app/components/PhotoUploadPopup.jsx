import React, { Component } from 'react';
import { uploadImage } from '../helpers.js';


export default class PhotoUploadPopup extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      tags: [],
      url: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const photo = {
      name: this.state.name,
      tags: this.state.tags,
      url:  this.state.url,
      author: {
        name: this.props.user.name,
        email: this.props.user.email,
        id:    this.props.user._id
      }
    }

    uploadImage(photo, (res) => {
      this.props.togglePopup();
      this.props.reloadImages();
    });
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleChangeTags(e) {
    this.setState({
      tags: e.target.value.split(' ')
    })
  }

  handleChangeUrl(e) {
    this.setState({
      url: e.target.value
    })
  }

  className() {
    return this.props.isActive ? 'popup-background active' : 'popup-background';
  }

  render() {
    return (
      <div className={this.className()}>
        <div className="img-control-bar">
          <a onClick={this.props.togglePopup} className="control-btn close" title="close" />
        </div>
        <div className="login-popup">
          <h2>Upload photo</h2>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input onChange={this.handleChangeName.bind(this)} className="form-control" placeholder="Name" type="text" />
              <input onChange={this.handleChangeTags.bind(this)} className="form-control" placeholder="tags" type="text" />
              <input onChange={this.handleChangeUrl.bind(this)} className="form-control" placeholder="url" type="text" />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
