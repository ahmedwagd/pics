import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';


const ImageList = ({ images }) => {
  return (
    <div className='ui two column divided grid'>
      {images && images.map(image =>
      (
        <div key={image.id} className='ui card column'>
          <ImageCard image={image} />
        </div>
      )
      )}
    </div>
  )
}

export default ImageList;
