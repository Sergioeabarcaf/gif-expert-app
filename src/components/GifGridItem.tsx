import React from 'react'
import { GifsData } from './GifGrid'
import PropTypes from 'prop-types';

interface GifGridItemProps {
  dataImage: GifsData
}


export const GifGridItem = ({ dataImage }: GifGridItemProps) => {
  const { url, title } = dataImage;
  return (
    <div className='card animate__animated animate__fadeInUp'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifGridItem.proptotypes = {
  dataImage: PropTypes.object.isRequired
}
