import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getTopBreedsWithPhoto } from '../helpers/getTopBreedWithPhoto'

export const Card = () => {

    const navigate = useNavigate()

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

        if (isMounted.current) {
            getTopBreeds();
        }

    }, [topBreeds]);

    const goToBreed = async(breed) => {
        const resp = await fetch(`https://cat-wiki-api-nr.herokuapp.com/breeds/search/?q=${breed}`);
        const { cat } = await resp.json();

        localStorage.setItem('cat', JSON.stringify(cat));
        navigate(`/breed/${ breed }`);
    }


    return (
        <>
            {
                topBreeds.map(({ photo, name }, i) => {
                    return (
                        <div className="card" key={i} onClick={() => { goToBreed(name) }}>
                            <img src={photo} alt={`image${i}`} />
                            <p>{name}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
