import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     const anime = 'The Seven Deadly Sins';
    //     setCategories([
    //         ...categories,
    //         anime,
    //     ]);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr></hr>

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
