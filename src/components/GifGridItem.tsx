import React from 'react'
import { GifsData } from './GifGrid'

interface GifGridItemProps {
    dataImage: GifsData
}


export const GifGridItem = ({ dataImage }: GifGridItemProps) => {
    const { url, title } = dataImage;
    console.log(dataImage);
    return (
        <div className='card'>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
