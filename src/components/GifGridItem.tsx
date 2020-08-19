import React from 'react'
import { GifsData } from './GifGrid'

interface GifGridItemProps {
    dataImage: GifsData
}


export const GifGridItem = (props: GifGridItemProps) => {
    console.log(props);
    return (
        <div>
            <img src={ props.dataImage.url } alt={props.dataImage.title} />
            <p>{ props.dataImage.title }</p>
        </div>
    )
}
