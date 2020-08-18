import React, { useState } from 'react';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['one punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setcategories([...categories, 'perro']);
    }

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map( (category) => <li key={category}>{ category }</li>)
                }
            </ol>
        </>
    );

}

export default GifExpertApp;
