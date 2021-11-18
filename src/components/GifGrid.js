import React, { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifts';
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () =>{
        getGifts( category )
            .then( setImages )
    }, [ category ] );

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GiftGridItem key={ image.id } { ...image }/>
                    ))
                }
            </div>
        </>
    )
}
