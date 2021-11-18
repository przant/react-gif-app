import React from 'react';
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from './GiftGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn animate__delay-1s">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

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
