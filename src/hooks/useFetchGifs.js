import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {

        getGifs(category)
        .then( images => {
            setTimeout(() => {
                console.log(images);
                
                setState({
                    data: images,
                    loading: false,
                })
            }, 3000)
        })

    }, [category])

    return state; // [ data: [], loading: true ]
}