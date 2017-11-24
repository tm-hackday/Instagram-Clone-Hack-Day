import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import base64 from 'base-64';
import utf8 from 'utf8';
import fileDownload from 'react-file-download';


class FileUploader extends React.Component {
  constructor() {
    super()
    this.state = { files: [],
                    imageTitle:'',
                    imageDescription:'',
                    errorMessage:0,
                    imageSource:''
                  }
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
      return (<p>Try clicking or dropping some images here or to upload them</p>)
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
      imageDescription:e.target.value
    });
  }

  getLocalImageAddress(){
    fetch(this.state.files[0].preview,{
      method:'GET'
    }).then(response => this.convertFileToDataURLviaFileReader(response.url, (res) => {
      this.postImage(res)
      })
    )}

  convertFileToDataURLviaFileReader(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  submitImage(e){
    if(this.state.files.length === 0 || this.state.imageTitle ==="" || this.state.imageDescription ===""){
      this.setState({
        errorMessage:1
      })
    }else{
      this.getLocalImageAddress();
    }
  }

  postImage(encodedImage){
    const FETCH_URL = "https://tfuh8kzd5m.execute-api.eu-west-1.amazonaws.com/dev/auth/upload";

    const postBody = {
      title: this.state.imageTitle,
      description: this.state.imageDescription,
      image: encodedImage
    }

    let myHeaders = new Headers();
    myHeaders.append('Content-Type','application/json');

    fetch(FETCH_URL,{
      method:'POST',
      headers: myHeaders,
      body:JSON.stringify(postBody)
    }).then(
      response => response.json())
      .then(
        json => {
          window.location.reload();
          }).catch(function(error) {
              alert("System was not able to connect to server");
              })
  }

  render() {

    let dropzoneRef;

    return (
      <section>
      {this.errorMessage()}
      <h1>Upload Your Images</h1>
        <form className="dropzone" onSubmit={e=> e.preventDefault()}>
        <input placeholder="Image Title" onChange = {e=> this.titleChange(e)} />

          <Dropzone className = "dropZoneStyle"
                    onDrop={this.onDrop.bind(this)}
                    multiple={false}
                    //maxSize={500000}
                    disableClick={false}>
            <div className="dropZoneContent">
            {this.showPreviews()}
            </div>
          </Dropzone>
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
