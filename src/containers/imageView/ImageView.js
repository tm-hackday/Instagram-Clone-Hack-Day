import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ImageView extends Component {
  render() {
    return (
      <div className="container">
        <h1>Image Stream</h1>
        <form className="form">
          <Link to="/" className="button">
            Home
          </Link>
        </form>
      </div>
    );
  }
}

export default ImageView;
