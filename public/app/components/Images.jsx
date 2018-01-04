import React, { Component } from 'react';
import ImageWrapper from './ImageWrapper.jsx';
import Popup from './Popup.jsx';

export default class Images extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      active: null
    }

    this.loadImages();
  }

  loadImages() {
    fetch('http://localhost:3000/images')
      .then((res) => res.json())
      .then((json) => {
        this.setState({images: json});
      })
      .catch((err) => console.log(err));
  }

  setActive(active) {
    this.setState({
      active
    });
  }

  componentWillReceiveProps() {
    this.loadImages();
  }

  render() {
    let images = [];
    let chunk1 = [];
    let chunk2 = [];
    let chunk3 = [];

    let popups = [];

    this.state.images.forEach((image, i) => {
      if (image.name.toLowerCase().indexOf(this.props.searchText.toLowerCase()) === -1) return;
      images.push(
        <ImageWrapper
        key={image._id}
        image={image}
        setActive={this.setActive.bind(this)}
      />);
    });

    if (!images.length) {
      return (
        <div className="container">
          <h2>sorry, nothing found.</h2>
        </div>
      );
    }

    images.forEach((img, i) => {
      let className = img.props.image._id === this.state.active ? 'popup active' : 'popup';

      popups.push(
        <Popup
          admin={this.props.admin}
          key={i}
          user={this.props.user}
          className={className}
          loadImages={this.loadImages.bind(this)}
          setActive={this.setActive.bind(this)}
          img={img.props.image}
        />
      );
    });

    for (let i = 0; i < images.length; i += 3) {
      chunk1.push(images[i]);
    }

    for (let i = 1; i < images.length; i += 3) {
      chunk2.push(images[i]);
    }

    for (let i = 2; i < images.length; i += 3) {
      chunk3.push(images[i]);
    }

    return (
      <div className="image-section">
        <div className="container">
          <div className="row">
            <div className="col">
              {chunk1}
            </div>
            <div className="col">
              {chunk2}
            </div>
            <div className="col">
              {chunk3}
            </div>
          </div>
        </div>
        {popups}
      </div>
    )
  }
}
