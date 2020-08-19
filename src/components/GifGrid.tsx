import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

interface GifGridProps {
    category: string;
}

export interface GifsData {
    id: string
    title: string
    url: string
}

export const GifGrid = ({ category }: GifGridProps) => {

    const [images, setImages] = useState([] as GifsData[]);

    useEffect(() => {
        getGifs( category )
            .then( (imgs: GifsData[]) => setImages( imgs ));
    }, [ category ]);

    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
                    {
                        images.map( (dataImage: GifsData) => < GifGridItem key={dataImage.id} dataImage={dataImage} /> )
                    }
            </div>
        </>
    )
}
