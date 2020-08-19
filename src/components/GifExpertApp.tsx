import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Dragon Ball']);

    return(
        <>
            <h2>GifExpertApp</h2>
            < AddCategory setCategories={ setcategories }/>
            <hr/>
                {
                    categories.map( (category) => < GifGrid key={category} category={ category } />)
                }
        </>
    );

}

export default GifExpertApp;
