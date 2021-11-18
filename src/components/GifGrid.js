import React, { useEffect, useState } from 'react'
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () =>{
        getGifts();
    }, [] );

    const getGifts = async ( ) => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=LeJBCovdVC9KWcplL3hY9q8VmpVeIv9m';
        const resp = await fetch( url )
        const { data } = await resp.json();

        const gifts = data.map( elt => {
            return {
                id: elt.id,
                title: elt.title,
                url: elt.images?.downsized_medium.url,
            }
        })

        console.log(gifts);
        setImages(gifts);
    }

    return (
        <div>
            <h3>{ category }</h3>
            {
                images.map( ( image ) => (
                    <GiftGridItem key={ image.id } { ...image }/>
                ))
            }
        </div>
    )
}
