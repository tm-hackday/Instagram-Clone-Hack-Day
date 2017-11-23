import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';

class FileUploader extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(newFiles) {
    this.setState({
      files:newFiles
    });
    console.log(this.state.files)
  }

  render() {

    let dropzoneRef;

    return (
      <section>
        <form className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </form>
        <aside>
          <ul>
            {
              this.state.files.map(f => {
                console.log(f.preview)
                return <li key={f.name}>
                  <img className="imagePreview"
                        key={f.name}
                        src={f.preview}/>
                </li>
              })
            }
          </ul>
        </aside>
      </section>
    );
  }
}

export default FileUploader;
