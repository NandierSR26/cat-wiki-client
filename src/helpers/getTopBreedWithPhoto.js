

export const getTopBreedsWithPhoto = async ( limit ) => {
    const resp = await fetch(`https://cat-wiki-api-nr.herokuapp.com/top-breeds/${limit}`);
    const data = await resp.json();

    const referens_image = data.map((image, i) => {
        return (image.reference_image_id);
    })

    const photos = referens_image.map(async (photo, i) => {
        const resp2 = await fetch(`https://api.thecatapi.com/v1/images/${photo}`);
        const data2 = await resp2.json();

        return data2.url;
    })

    const photoLink = await Promise.all(photos);
    const breeds = data.map((breed, i) => {
        return {
            ...breed,
            photo: photoLink[i]
        }
    })

    return breeds;
}