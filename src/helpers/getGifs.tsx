import React from 'react'
import { GifsData } from '../components/GifGrid';

interface GifsResponse {
    id: string
    title: string
    images: {
        downsized_medium: {
            url: string
        }
    }
}

export const getGifs = async( category: string ) => {

    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=W3atpkF628WfcrLhyjGldHEGMTHLY76G&q=${ encodeURI( category ) }&limit=${limit}`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( (content: GifsResponse): GifsData => {
        return {
            id: content.id,
            title: content.title,
            url: content.images.downsized_medium.url
        }

    });

    return gifs;



    return (
        <div>
            
        </div>
    )
}
