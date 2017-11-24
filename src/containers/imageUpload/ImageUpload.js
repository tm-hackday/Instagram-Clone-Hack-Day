import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone'
import FileUploader from './FileUploader'

class ImageUpload extends Component {
  render() {
    return (
      <div className="container">
        <FileUploader/>
        <form className="form">
        </form>
      </div>
    );
  }
}

export default ImageUpload;
