import React, { Component } from 'react';

export default class ImageWrapper extends Component {

  openPopup() {
    this.props.setActive(this.props.image._id);
  }

  render() {
    return (
      <div className="image" onClick={this.openPopup.bind(this)}>
        <img  src={this.props.image.url} alt="" />
        <span className="author">{this.props.image.author.name}</span>
      </div>
    )
  }
}
