import React, { useState } from 'react'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        const anime = 'The Seven Deadly Sins';
        setCategories([
            ...categories,
            anime,
        ]);
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr></hr>

            <button onClick={ handleAdd }>Add Anime</button>

            <ol>
                {
                    categories.map(
                        (category) => {
                            return <li key={ category }>{ category }</li>
                        }
                    )
                }
            </ol>
        </div>
    )
}
