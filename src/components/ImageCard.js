import React, { useRef, useEffect } from 'react';

// using hooks & Class component
/*
class ImageCard extends React.Component {

  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight)
  }

  render() {
    const { alt_description, urls } = this.props.image;
    return (
      <div className='image'>
        <img
          ref={this.imageRef}
          className="ui fluid image"
          src={urls.regular}
          alt={alt_description}
        />
      </div>
    )
  }
}
export default ImageCard
*/

// using hooks & func component
const ImageCard = ({ image }) => {
  const imageRef = useRef();

  useEffect(() => {
    console.log(imageRef.current.clientHeight)
    // imageRef.current.addEventListener('load', () => {
    //   this.classList.add('loading')
    //   console.log(imageRef)
    // })
  })
  return (
    <div className='image'>
      <img
        ref={imageRef}
        className="ui fluid image"
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  )
}

export default ImageCard
