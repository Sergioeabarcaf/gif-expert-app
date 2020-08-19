import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";
import { GifsData } from "../components/GifGrid";

export const useFetchGifs = ( category: string) => {
  
    const [state, setstate] = useState({ data: [] as GifsData[], loading: true});

    useEffect(() => {
        getGifs( category )
            .then( (imgs: GifsData[]) => setstate({ data: imgs, loading: false }));
    }, [ category ]);

    return state;
} 