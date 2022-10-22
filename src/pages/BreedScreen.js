import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Catphoto } from '../components/Catphoto';
import { Levels } from '../components/Levels';
import { Specs } from '../components/Specs';

export const BreedScreen = () => {

    const { breedId } = useParams()
    console.log(breedId);

    const [photo, setPhoto] = useState([])
    let cat = JSON.parse(localStorage.getItem('cat'));

    if (cat.length > 0) {
        [cat] = cat;
    }

    const {
        id,
        name,
        description,
        temperament,
        origin,
        life_span,
        adaptability,
        affection_level,
        child_friendly,
        grooming,
        intelligence,
        health_issues,
        social_needs,
        stranger_friendly,
    } = cat;

    const specs = [adaptability, affection_level, child_friendly, grooming, intelligence, health_issues, social_needs, stranger_friendly];

    const getPhotos = async () => {

        const resp = await fetch(`https://cat-wiki-api-nr.herokuapp.com/breeds-photos/${id}`);
        const data = await resp.json();

        const photos = data.map(photo => photo.url);

        setPhoto(photos);
    }

    useEffect(() => {
        getPhotos();

        return () => {
            localStorage.clear()
        }
    }, [])


    return (
        <>
            <section className="about-breed">
                <div className="breed-photo">
                    <img src={photo[0]} alt="imagen" />
                </div>

                <div className="breed-info">
                    <h3>{name}</h3>

                    <p className="breed-description">{description}</p>

                    <p className="text-spect"><b>Temperament:</b>  {temperament}</p>
                    <p className="text-spect"><b>Origin:</b> {origin}</p>
                    <p className="text-spect"><b>Life Span:</b> {life_span}</p>

                    <div className="specs-container">
                        <Specs />
                        <Levels specs={specs} />
                    </div>
                </div>
            </section>

            <h1>other photos</h1>
            <section className="other-photos">
                <Catphoto photos={photo} />
            </section>
        </>
    )
}
