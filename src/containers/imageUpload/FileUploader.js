import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';

class FileUploader extends React.Component {
  constructor() {
    super()
    this.state = { files: [],
                    imageTitle:'',
                    imageDescription:'',
                    errorMessage:0}
  }

  onDrop(newFile, rejectedFile) {
    this.setState({
      files:newFile
    });
    if(rejectedFile.length !== 0){
      alert('Something went wrong! Either the file was too big or the format was unsupported :(')
    }
  }

  showPreviews(){

    if(this.state.files.length === 0){
      return (<p>Try dropping some files here to upload them</p>)
    }
    return(
    <aside>
      <ul>
        {
          this.state.files.map(f => {
            return <li key={f.name}>
              <img className="imagePreview"
                    key={f.name}
                    src={f.preview}/>
            </li>
          })
        }
      </ul>
    </aside>
  )}

  errorMessage(){
    if(this.state.errorMessage==1){
      return <p className="errorMessage">Please fill out every field</p>
    }
    return(
      <div></div>
    )
  }

  titleChange(e){
    this.setState({
      imageTitle:e.target.value
    });
  }

  descriptionChange(e){
    this.setState({
      imageDescriptions:e.target.value
    });
  }

  submitImage(e){
    if(this.state.files.length === 0 || this.state.imageTitle ===""){
      this.setState({
        errorMessage:1
      });
      return 0
    }
  }

  render() {

    let dropzoneRef;

    return (
      <section>
      {this.errorMessage()}
      <h1>Upload Your Images</h1>
        <form className="dropzone" onSubmit={e=> e.preventDefault()}>
          <Dropzone className = "dropZoneStyle"
                    onDrop={this.onDrop.bind(this)}
                    multiple={false}
                    maxSize={500000}
                    disableClick={true}>
            <div className="dropZoneContent">
            {this.showPreviews()}
            </div>
          </Dropzone>
          <input placeholder="Image Title" onChange = {e=> this.titleChange(e)} />
          <textarea placeholder="Image Description ..." onChange = {e=> this.descriptionChange(e)}/>
          <div className="button greenButton" onClick={e => this.submitImage(e)}>
            Submit
          </div>
          <Link to="/" className="button" style={{ textDecoration: 'none' }}>
            Home
          </Link>
        </form>
      </section>
    );
  }
}

export default FileUploader;
