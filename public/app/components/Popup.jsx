import React, { Component } from 'react';
import { deleteImage, updateImage } from '../helpers.js';

export default class Popup extends Component {
  constructor() {
    super();

    this.state = {
      commentText: '',
      descriptionActive: false
    };
  }

  closePopup() {
    this.props.setActive(null);
  }

  deleteImg() {
    if (!confirm('are u sure?')) return;

    deleteImage(this.props.img._id);
    this.closePopup();
    this.props.loadImages();
  }

  renderDelete() {
    if (this.props.admin) {
      return (
        <a title="delete photo" onClick={this.deleteImg.bind(this)} className="control-btn delete" />
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.props.user) {
      alert('You have to login first!');
      return;
    }

    const author = {
      name: this.props.user.name,
      email: this.props.user.email,
      id: this.props.user._id
    };

    const comment = {
      text: this.state.commentText,
      author
    };

    const img = Object.assign({}, this.props.img);
    img.comments.push(comment);

    updateImage(img, (res) => {
      this.setState({commentText: ''});
    });
  }

  handleChangeText(e) {
    this.setState({
      commentText: e.target.value
    });
  }

  renderComments() {
    const comments = this.props.img.comments.map((comment, i) => {
      return (
        <div key={`${comment.author.id}-comment-${i}`} className="comment">
          <span className="author">{comment.author.name}</span>
          <span className="text">{comment.text}</span>
        </div>
      );
    });

    return (
      <div className={`comment-section${this.state.descriptionActive ? ' active' : ''}`}>
        <div className="comments">
          {comments}
        </div>
        <div className="send-comment">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input onChange={this.handleChangeText.bind(this)} value={this.state.commentText} className="form-control" placeholder="Enter your message..." type="text" />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  renderDescriptionToggle() {
    return (
      <a onClick={this.toggleDescription.bind(this)} title="toggle description" className="control-btn description" />
    );
  }

  toggleDescription() {
    this.setState((prevState) => {
      return {
        descriptionActive: !prevState.descriptionActive
      }
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <div onClick={this.closePopup.bind(this)} className="popup-background" />
        <img src={this.props.img.url} alt="" />
        <div className="img-control-bar">
          <div className="controls">
            <a onClick={this.closePopup.bind(this)} title="close" className="control-btn close" />
            <a href={this.props.img.url} download title="download photo" className="control-btn download" />
            {this.renderDescriptionToggle()}
            {this.renderDelete()}
          </div>
          {this.renderComments()}
        </div>
      </div>
    )
  }
}
