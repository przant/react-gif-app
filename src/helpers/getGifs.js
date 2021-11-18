export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURIComponent(category)}&limit=10&api_key=LeJBCovdVC9KWcplL3hY9q8VmpVeIv9m`;
    const resp = await fetch( url )
    const { data } = await resp.json();

    const gifts = data.map( elt => {
        return {
            id: elt.id,
            title: elt.title,
            url: elt.images?.downsized_medium.url,
        }
    })
    
    return gifts;
}