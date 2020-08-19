import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

interface GifGridProps {
    category: string;
}

interface GifsResponse {
    id: string
    title: string
    images: {
        downsized_medium: {
            url: string
        }
    }
}

export interface GifsData {
    id: string
    title: string
    url: string
}

export const GifGrid = (props: GifGridProps) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);
    
    const limit = 5;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=W3atpkF628WfcrLhyjGldHEGMTHLY76G&q=Dragon+Ball&limit=${limit}`;
    
    const getGifs = async() => {
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( (content: GifsResponse): GifsData => {
            return {
                id: content.id,
                title: content.title,
                url: content.images.downsized_medium.url
            }

        });

        setImages(gifs);
    }

    return (
        <div>
            <h2>{ props.category }</h2>
            <ol>
                {
                    images.map( (dataImage: GifsData) => < GifGridItem key={dataImage.id} dataImage={dataImage} /> )
                }
                
            </ol>
        </div>
    )
}
