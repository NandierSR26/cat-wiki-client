import React, { useEffect, useState } from 'react'
import { getTopBreedsWithPhoto } from '../helpers/getTopBreedWithPhoto'

export const MostWantedItem = () => {

    const [topBreeds, setTopBreeds] = useState([])

    const getTopBreeds = () => {
        getTopBreedsWithPhoto(10).then(breeds => {
            setTopBreeds(breeds);
        })
    }

    useEffect(() => {
        getTopBreeds();
    }, [])

    return (
        <>
            {
                topBreeds.map(({ name, photo, description }, i) => (
                    <div className="top-list-item" key={i}>
                        <div className="cat-photo">
                            <img src={ photo } alt="imagen" />
                        </div>

                        <div className="cat-description">
                            <h2>{i+1}. { name }</h2>

                            <p>{ description }</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
