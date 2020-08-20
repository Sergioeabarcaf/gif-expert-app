import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

interface GifGridProps {
  category: string;
}

export interface GifsData {
  id: string
  title: string
  url: string
}

export const GifGrid = ({ category }: GifGridProps) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading &&
        <p className='animate__animated animate__flash animate__infinite'>Loading...</p>
      }
      <div className='card-grid'>
        {
          images.map((dataImage: GifsData) => < GifGridItem key={dataImage.id} dataImage={dataImage} />)
        }
      </div>
    </>
  )
}
