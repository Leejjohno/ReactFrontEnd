import React from 'react'
import { PictureContainer } from '../pictureContainer';

export const Display = ( {pictures} ) => {
  return (
    <div>
        {pictures.map((item, index) => {
        return (
          <PictureContainer
            key={index}
            author={item.author}
            className='pictureContainer'
            url={item.download_url}
          />
        )
      })}
    </div>
  )
};
