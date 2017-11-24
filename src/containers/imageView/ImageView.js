import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ImageView extends Component {

  constructor() {
    super()
    this.state = { images: []
                  }
  }

  imageList(){
    if (this.state.images.length === 0){
      return(<h2 className = "emptyMessage">No Images Found</h2>)
    }
    else{
      return this.renderImages();
    }
  }

  renderImages(){

    let imageList = []

    this.state.images.map((image,i)=>{
      console.log(image.title)
      imageList.push(<div
                        className="imageContainer"
                        key={i}>
                        <img className ="instaImage" src={image.url}/>
                        <div className = "instaTitle">{image.title}</div>
                        <div className = "instaDescr">
                          <div className="username">{image.user}</div>
                            {image.descr}
                          </div>
                        </div>
                  )});

    return(
      <div>
      {imageList}
      </div>
    )

  }

  componentDidMount(){

    this.setState({images:[
      {
        url:'./test2.jpg',
        title:'This is the title',
        user:'User Name',
        descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida facilisis tellus, vitae pulvinar neque tristique nec. Praesent at magna hendrerit eros egestas imperdiet et in ipsum.'
      },
      {
        url:'./test2.jpg',
        title:'This is the title',
        user:'User Name',
        descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida facilisis tellus, vitae pulvinar neque tristique nec. Praesent at magna hendrerit eros egestas imperdiet et in ipsum.'
      },
      {
        url:'./test2.jpg',
        title:'This is the title',
        user:'User Name',
        descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida facilisis tellus, vitae pulvinar neque tristique nec. Praesent at magna hendrerit eros egestas imperdiet et in ipsum.'
      },
      {
        url:'./test2.jpg',
        title:'This is the title',
        user:'User Name',
        descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida facilisis tellus, vitae pulvinar neque tristique nec. Praesent at magna hendrerit eros egestas imperdiet et in ipsum.'
      },
      {
        url:'./test2.jpg',
        title:'This is the title',
        user:'User Name',
        descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida facilisis tellus, vitae pulvinar neque tristique nec. Praesent at magna hendrerit eros egestas imperdiet et in ipsum.'
      },
      {
        url:'./test2.jpg',
        title:'This is the title',
        user:'User Name',
        descr:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam gravida facilisis tellus, vitae pulvinar neque tristique nec. Praesent at magna hendrerit eros egestas imperdiet et in ipsum.'
      }

    ]});

  }


  render() {

    return (
      <div className="container viewContainer">
        <h1>Image Stream</h1>
        <form className="form">
          <Link to="/" className="button" style={{ textDecoration: 'none' }}>
            Home
          </Link>
        </form>
        {this.imageList()}
      </div>
    );
  }
}

export default ImageView;
