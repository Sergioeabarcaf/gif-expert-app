import React, { useState } from 'react';
import { AddCategory } from './AddCategory';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['one punch', 'Samurai X', 'Dragon Ball']);

    return(
        <>
            <h2>GifExpertApp</h2>
            < AddCategory setCategories={ setcategories }/>
            <hr/>
            <ol>
                {
                    categories.map( (category) => <li key={category}>{ category }</li>)
                }
            </ol>
        </>
    );

}

export default GifExpertApp;
