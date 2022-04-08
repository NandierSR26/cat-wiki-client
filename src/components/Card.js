import React, { useEffect, useRef, useState } from 'react'
import { getTopBreedsWithPhoto } from '../helpers/getTopBreedWithPhoto'

export const Card = () => {

    const [topBreeds, setTopBreeds] = useState([]);
    const isMounted = useRef(true)

    const getTopBreeds = () => {
        getTopBreedsWithPhoto(4).then(breeds => {
            setTopBreeds(breeds);
        })
    }

    useEffect(() => {
        return () => {
            isMounted.current = false;
            setTopBreeds([])
        }
    }, [])

    useEffect(() => {

        if( isMounted.current ) {
            getTopBreeds();
        }
        
    }, [topBreeds]);
    

    return (
        <>
            {
                topBreeds.map(({ photo, name }, i) => {
                    return (
                        <div className="card" key={i}>
                            <img src={ photo } alt={`image${i}`} />
                            <p>{ name }</p>
                        </div>
                    )
                })
            }
        </>
    )
}
